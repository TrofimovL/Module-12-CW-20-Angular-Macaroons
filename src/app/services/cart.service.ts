import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public count: number = 0;

  public price: number = 0;
}
