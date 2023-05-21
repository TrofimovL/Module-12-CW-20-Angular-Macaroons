import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {ContactsService} from "./services/contacts.service";
import {ProductsService} from "./services/products.service";
import {NgOptimizedImage} from "@angular/common";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvantageComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
  ],
  providers: [ContactsService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
