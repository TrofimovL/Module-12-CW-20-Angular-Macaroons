import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {FormType} from "./types/form.type";
import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";
import {AdvantagesService} from "./services/advantages.service";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app-adaptive.component.scss']
})
export class AppComponent {
  title = 'cw20_angular_macaroons';

  public showPresent: boolean = true;

  public formValues: FormType = {
    customerOrderTitle: '',
    customerName: '',
    customerPhone: ''
  }


  // public macaroons: ProductType[] = this.ProductsService.getProducts()

  constructor(public ProductsService: ProductsService,
              public CartService: CartService,
              public AdvantagesService:AdvantagesService) {
  }

  public scrollTo(scrollTo: HTMLElement): void {
    scrollTo.scrollIntoView({behavior: 'smooth'});
  }

  public orderItem(title:string, scrollTo: HTMLElement): void {
    // this.scrollTo(scrollTo);
    this.formValues.customerOrderTitle = title.toUpperCase();
    // this.CartService.count++;
    alert(`${title} добавлен в корзину!`);

  }

  public orderDone() {
    if (this.checkFields()) {
      alert(`Ваш заказ \"${this.formValues.customerOrderTitle}\" скоро будет готов. Ожидайте звонка.`)
      this.formValues = {
        customerOrderTitle: '',
        customerName: '',
        customerPhone: ''
      }
    } else {
      alert('Заполните все поля.')
    }
  }

  private checkFields(): boolean {

    if (!this.formValues.customerOrderTitle.trim()) return false;
    if (!this.formValues.customerName.trim()) return false;
    if (!this.formValues.customerPhone.trim()) return false;

    return true;
  }



}
