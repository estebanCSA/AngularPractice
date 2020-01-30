import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';
import { Product } from '../interface/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {
product: Product[];
  constructor(private dService: DataServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    //we are going to grab the Id
    const id = this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(sku: string){
    //find info via service
    console.log(sku);
    this.dService.getItem(sku).subscribe(
      x => this.product = x
    );

  }
}
