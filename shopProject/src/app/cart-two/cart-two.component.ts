import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-two',
  templateUrl: './cart-two.component.html',
  styleUrls: ['./cart-two.component.scss']
})
export class CartTwoComponent implements OnInit {
  productDesc: Iproduct;
  constructor(private dService: DataService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    const productName = this.route.snapshot.paramMap.get('productName');

    this.dService.getProduct(id).subscribe(
      item => this.productDesc = item
    )
  }
}
