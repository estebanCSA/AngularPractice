import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
productList: Iproduct[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    //attach productlist to the array in our Data Service.
    this.productList = this.dService.getProducts();
  }
}