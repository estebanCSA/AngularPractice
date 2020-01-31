import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItems: Iproduct[] = [];
  public $cartItems = new BehaviorSubject<Iproduct[]>(this.cartItems);

  cartTotal = 0;
  $cartTotal = new BehaviorSubject<number>(this.cartTotal);

  cartQuantity = 0;
  $cartQuantity = new BehaviorSubject<number>(this.cartQuantity);

  constructor() { }

  addItemsToCart(item: Iproduct) {
    let cartItem = this.cartItems.find(x => x.id === item.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    this.cartQuantity++;
    console.log(this.cartItems);
    this.cartTotal += +item.price;

    //let cartItems = this.cartItems.find(x => x.id === item.id);

    //this.cartItems.push(item);
    //console.log(this.cartItems);

    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }
  removeProduct(item, index) {
    this.cartItems.splice(index, 1);
    const totalPrice = item.quantity * +item.price;
    this.cartTotal -= totalPrice;
    this.cartQuantity -= item.quantity;

    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }
}