import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { CartOneComponent } from './cart-one/cart-one.component';
import { CartTwoComponent } from './cart-two/cart-two.component';
import { FaqtosComponent } from './faqtos/faqtos.component';
import { ItemComponent } from './item/item.component';
import { ProductControlComponent } from './product-control/product-control.component';
import { ProductKeyboardComponent } from './product-keyboard/product-keyboard.component';
import { ProductMiceComponent } from './product-mice/product-mice.component';
import { ProductPCsComponent } from './product-pcs/product-pcs.component';
import { SigninupComponent } from './signinup/signinup.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'About', component: AboutComponent},
  {path: 'cartone', component: CartOneComponent},
  {path: 'carttwo', component: CartTwoComponent},
  {path: 'faqtos', component: FaqtosComponent},
  {path: 'item', component:ItemComponent},
  {path: 'controls', component: ProductControlComponent},
  {path: 'keyboard', component: ProductKeyboardComponent},
  {path: 'mice', component: ProductMiceComponent},
  {path: 'pcs',component: ProductPCsComponent},
  {path: 'sign', component: SigninupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }