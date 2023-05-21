import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {BgColorGradient} from "../types/bg-color-gradient";

@Directive({
  selector: '[myBackground]'
})
export class BackgroundDirective implements OnInit {

  @Input() myBackgroundDefault: string[] = ['#71081e', '#d7485c']
  @Input() myBackgroundHover: string[] = ['#070459', '#f3697c']

  constructor(private el: ElementRef, private rend: Renderer2) {
  }

  @HostListener('mouseenter')
  mouseenterBg() {
    console.log(1)
    this.setColor(this.myBackgroundHover);
  }

  @HostListener('mouseleave')
  mouseleaveBg() {
    console.log(2)
    this.setColor(this.myBackgroundDefault);
  }

  ngOnInit() {
    this.setColor(this.myBackgroundDefault);
  }

  private setColor(color: string[]){
    this.el.nativeElement.style.backgroundImage =`linear-gradient(90deg, ${color[0]} 0%, ${color[1]} 100%)`
  }

}
