import {Component} from '@angular/core';
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-adaptive.component.scss']
})
export class HeaderComponent {

  public isPopupOpen: boolean = false;

  constructor(public ContactsService: ContactsService) {
  }

  popupSwitch():void {
    this.isPopupOpen = !this.isPopupOpen
  }
}

