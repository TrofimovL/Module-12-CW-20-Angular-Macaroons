import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {FormType} from "./types/form.type";
import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";
import {AdvantagesService} from "./services/advantages.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app-adaptive.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cw20_angular_macaroons';
  private scrollOffset = 50;

  public showPresent: boolean = true;

  public formValues: FormType = {
    customerOrderTitle: '',
    customerName: '',
    customerPhone: ''
  }


  public macaroons: ProductType[] = this.ProductsService.getProducts();

  constructor(private ProductsService: ProductsService,
              public CartService: CartService,
              public AdvantagesService: AdvantagesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // Listen for NavigationEnd event to ensure fragment scroll is handled
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.route.snapshot.fragment;
      console.log(fragment)
      this.scrollToFragment(fragment);
    });

    this.route.fragment.subscribe(fragment => {
      this.scrollToFragment(fragment);
    });

  };

  ngAfterViewInit() {
    // Handle the initial load

  }

  private scrollToFragment(fragment: string | null) {
    if (fragment) {
      setTimeout(() => {

        const element = document.getElementById(fragment);
        if (element) {
          // Get the element's top position
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          // Subtract the offset
          const offsetPosition = elementPosition + this.scrollOffset;
          // Smooth scroll to the position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }


      })
    }
  }


  public orderItem(title: string): void {
    this.formValues.customerOrderTitle = title.toUpperCase();
    alert(`${title} добавлен в корзину!`);

  }

  public orderDone() {
    if (this.checkFields()) {
      alert(`Ваш заказ скоро будет готов. Ожидайте звонка.`)
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

  public scrollTo(scrollTo: HTMLElement): void {
    scrollTo.scrollIntoView({behavior: 'smooth'});
  }


}
