import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products: Product[];
  constructor(private dService: DataServicesService) { }

  ngOnInit() {
  this.products = this.dService.getProducts();
  }
}
