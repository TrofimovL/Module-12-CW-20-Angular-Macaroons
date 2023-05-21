import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-adaptive.component.scss']
})
export class HeaderComponent {

  public isPopupOpen: boolean = false;

  popupSwitch():void {
    this.isPopupOpen = !this.isPopupOpen
  }

  protected readonly ContactsService = ContactsService;
}

