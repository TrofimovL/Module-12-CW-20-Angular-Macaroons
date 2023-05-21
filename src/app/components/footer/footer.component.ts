import {Component} from '@angular/core';
import {AppComponent} from "../../app.component";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer-adaptive.component.scss']
})
export class FooterComponent {

  constructor(public phone: ContactsService) {
  }

  public intagramLink:string = 'https://instagram.com'
  protected readonly ContactsService = ContactsService;
}
