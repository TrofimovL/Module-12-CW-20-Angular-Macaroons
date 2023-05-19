import {Component} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer-adaptive.component.scss']
})
export class FooterComponent {

  public phone: string = AppComponent.phone;

  public intagramLink:string = 'https://instagram.com'
}
