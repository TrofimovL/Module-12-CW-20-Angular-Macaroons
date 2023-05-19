import {Component} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-adaptive.component.scss']
})
export class HeaderComponent {

  public phone: string = AppComponent.phone;

  public isPopupOpen: boolean = false;

  public popupSwitch():void{
    this.isPopupOpen = !this.isPopupOpen
  }


}

