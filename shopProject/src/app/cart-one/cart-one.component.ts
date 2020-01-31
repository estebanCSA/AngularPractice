import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Iproduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-cart-one',
  templateUrl: './cart-one.component.html',
  styleUrls: ['./cart-one.component.scss']
})
export class CartOneComponent implements OnInit {
cartCount = 0;
cartItems: Iproduct[]=[];
showList=false;
cartTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  this.cartService.$cartItems.subscribe(items => {
    this.cartCount=items.length;
    this.cartItems=items;
  });
  this.cartService.$cartTotal.subscribe(total =>{
    this.cartTotal = total;
  });
  this.cartService.$cartQuantity.subscribe(count =>{
    this.cartCount = count;
  });
}

toggleList(){
  this.showList = !this.showList;
}

removeFromCart(item, index){
  this.cartService.removeProduct(item, index);
}
}