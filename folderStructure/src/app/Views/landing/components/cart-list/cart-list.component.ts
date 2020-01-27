import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  items: any[] = ['Item 1','Item 2', 'Item 3','Item 4', 'Item 5','Item 6'];

  constructor(private cartService: CartService) { }


  ngOnInit() {
  }
  addToCart(){
    this.cartService.addToCart();
  }
  
}
