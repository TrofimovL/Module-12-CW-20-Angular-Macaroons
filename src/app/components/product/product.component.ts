import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product!: ProductType;
  @Input() index: number = 0;

  @Output() orderItemEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(public CartService: CartService) {}
  orderItem(product:ProductType):void{
    // this.CartService.price += parseFloat(product.price.replace(',', '.'));
    this.CartService.price += product.price
    this.CartService.price = Number(this.CartService.price.toFixed(2));
    this.CartService.count++;
    this.orderItemEvent.emit(this.product.title);
  }

}
