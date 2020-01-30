import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsInCart: Iproduct[]=[];
products: Iproduct[]=[
  {
    id: '1',
    pName: 'Ninja Stars',
    pNameURL: 'NinjaStars',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'May Cause Paper Cuts',
    price: 'View in Cart',
    qty:0

  },
  {
    id: '2',
    pName: 'Ninja22 Stars',
    pNameURL: 'NinjaS222tars',
    pDesc: 'Paper Nin222222ja Star',
    additionalInfo: 'May 2222222Cause Paper Cuts',
    price: 'View in22222 Cart',
    qty:0

  },
  {
    id: '3',
    pName: 'Ninja 3333333',
    pNameURL: 'Ninj33333aStars',
    pDesc: 'Paper Nin333333ja Star',
    additionalInfo: 'May Cause3333333 Paper Cuts',
    price: 'View i3333333n Cart',
    qty:0

  }
]
  constructor() { }

  getProducts(): Iproduct[]{
    return this.products;
  }
  addToCart(cartItem: Iproduct){
    if(!this.itemsInCart.includes(cartItem)){
    cartItem.qty=cartItem.qty++;
    this.itemsInCart.push(cartItem);
    console.log(this.itemsInCart);
  }else{
    //we are going to search for item in cart
  }
  }
  getCartItems(): Iproduct[]{
    return this.itemsInCart;
  }
  emptyCart(){
    this.itemsInCart.length=0;
  }
  removeItemFromCart(id: Iproduct): void{
    //search for product  and remove from cart
    const index = this.findItemInCart(id);
    //perform a splice
    this.itemsInCart[index].qty=0;
    this.itemsInCart.splice(index, 1);
  }

  findItemInCart(id: Iproduct): number{
    //find product the id in our cart
    return this.itemsInCart.indexOf(id);
    
  }
}
