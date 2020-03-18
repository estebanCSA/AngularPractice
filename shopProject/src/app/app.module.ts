import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProductControlComponent } from './product-control/product-control.component';
import { ProductKeyboardComponent } from './product-keyboard/product-keyboard.component';
import { ProductMiceComponent } from './product-mice/product-mice.component';
import { ProductPCsComponent } from './product-pcs/product-pcs.component';
import { FaqtosComponent } from './faqtos/faqtos.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { SigninupComponent } from './signinup/signinup.component';
import { CartOneComponent } from './cart-one/cart-one.component';
import { CartTwoComponent } from './cart-two/cart-two.component';
import { ModalComponent } from './modal/modal.component';
import { ModaldescComponent } from './shared/modaldesc/modaldesc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductControlComponent,
    ProductKeyboardComponent,
    ProductMiceComponent,
    ProductPCsComponent,
    FaqtosComponent,
    AboutComponent,
    ItemComponent,
    SigninupComponent,
    CartOneComponent,
    CartTwoComponent,
    ModalComponent,
    ModaldescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
