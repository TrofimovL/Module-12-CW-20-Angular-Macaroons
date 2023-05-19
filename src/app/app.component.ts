import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {MacaroonType} from "./types/macaroon.type";
import {OrderInfoType} from "./types/orderInfo.type";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app-adaptive.component.scss']
})
export class AppComponent {
  title = 'cw20_angular_macaroons';

  public static phone: string = '+375 (29) 368-98-68';

  public userInfo: OrderInfoType = {
    itemName: '',
    name: '',
    tel: '',
  }

  public showPresent: boolean = false;

  public scrollTo(scrollTo: HTMLElement): void {
    scrollTo.scrollIntoView({behavior: 'smooth'});
  }

  public orderItem(scrollTo: HTMLElement, item: MacaroonType): void {
    this.scrollTo(scrollTo);
    this.userInfo.itemName = item.title.toUpperCase();
  }

  public orderDone() {
    let isValid:boolean = true;

    if(!this.userInfo.itemName) isValid = false;
    if(!this.userInfo.name) isValid = false;
    if(!this.userInfo.tel) isValid = false;

    if(isValid){
      const body: OrderInfoType = {
        itemName: this.userInfo.itemName,
        name: this.userInfo.name,
        tel: this.userInfo.tel,
      }

      //   send

      alert('Заказ принят')

      this.userInfo = {
        itemName: '',
        name: '',
        tel: '',
      }
    }


  }


  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },

  ]

  public macaroons: MacaroonType[] = [
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
