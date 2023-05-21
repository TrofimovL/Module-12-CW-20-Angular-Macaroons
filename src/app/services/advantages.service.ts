import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {AdvantageType} from "../types/advantage.type";

@Injectable({
  providedIn: 'root'
})
export class AdvantagesService {

  getAdvantages(): AdvantageType[] {
    return [
      {
        title: 'Лучшие продукты',
        description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
      },
      {
        title: 'Много вкусов',
        description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок. Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
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
  }
}
