import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Iproduct[] = [
    {
      id: '1',
      pName: '44444444444Ninja Stars',
      pNameURL: '44444NinjaStars',
      pDesc: '44444444Paper Ninja Star',
      additionalInfo: '444444444May Cause Paper Cuts',
      price: '4444444444View in Cart'
    },
    {
      id: '2',
      pName: '333333Ninja Stars',
      pNameURL: '333333333NinjaStars',
      pDesc: '333333333Paper Ninja Star',
      additionalInfo: '33333333 Cause Paper Cuts',
      price: '333333333 in Cart'
    },
    {
      id: '3',
      pName: '222222222Ninja Stars',
      pNameURL: '222222NinjaStars',
      pDesc: '222222222Paper Ninja Star',
      additionalInfo: '222222222May Cause Paper Cuts',
      price: '2222222View in Cart'
    },
    {
      id: '4',
      pName: '111111Ninja Stars',
      pNameURL: '111111NinjaStars',
      pDesc: '111111Paper Ninja Star',
      additionalInfo: '111111111May Cause Paper Cuts',
      price: '111111View in Cart'
    }
  ];
  constructor() { }

  getProducts(): Iproduct[] {
    return this.products;
  }

  getProduct(sku: string): Observable<Iproduct> {
    return of(this.products.find(
      x => x.id === sku
    )
    );
  }
}
