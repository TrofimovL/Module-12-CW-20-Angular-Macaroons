import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {MacaroonType} from "./types/macaroon.type";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app-adaptive.component.scss']
})
export class AppComponent {
  title = 'cw20_angular_macaroons';

  public orderedItem: string = '';

  public showPresent:boolean = false;

  public scrollTo(scrollTo: HTMLElement): void {
    scrollTo.scrollIntoView({behavior: 'smooth'});
  }

  public orderItem(scrollTo: HTMLElement, item: MacaroonType): void {
    this.scrollTo(scrollTo);
    this.orderedItem = item.title.toUpperCase();
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
