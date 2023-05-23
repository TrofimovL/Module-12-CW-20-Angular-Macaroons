import {Component} from '@angular/core';
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer-adaptive.component.scss']
})
export class FooterComponent {

  constructor(public ContactsService: ContactsService) {
  }

  public instagramLink:string = 'https://instagram.com'
  // protected readonly ContactsService = ContactsService;
}
