import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductsService {

  getProducts():ProductType[]{
    return [
      {
        imgSrc: 'menu1',
        title: 'Макарун с малиной',
        price: '1,70'
      },
      {
        imgSrc: 'menu2',
        title: 'Макарун с манго',
        price: '1,70'
      },
      {
        imgSrc: 'menu3',
        title: 'Пирог с ванилью',
        price: '1,70'
      },
      {
        imgSrc: 'menu4',
        title: 'Пирог с фисташками',
        price: '1,70'
      }
    ]
  }
}
