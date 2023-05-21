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
import { ProductComponent } from './components/product/product.component';
import { BackgroundDirective } from './directives/background.directive';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';
import { MaxWordCountPipe } from './pipes/max-word-count.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvantageComponent,
    ProductComponent,
    BackgroundDirective,
    CurrencyPipePipe,
    MaxWordCountPipe,
    PhoneFormatPipe,
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
