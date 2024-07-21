import {Component} from '@angular/core';
import {ContactsService} from "../../services/contacts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-adaptive.component.scss']
})
export class HeaderComponent {

  public isPopupOpen: boolean = false;

  constructor(public ContactsService: ContactsService,
              private router: Router) {
  }

  navigateToFragment(fragment: string) {
    this.router.navigate([''], {fragment: fragment}).then(() => {
      const element = document.getElementById(fragment);
      if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition + 100; // Adjust this value as needed
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
      }
    });
  }

  popupSwitch(): void {
    this.isPopupOpen = !this.isPopupOpen
  }
}

