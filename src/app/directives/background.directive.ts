import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[myBackground]'
})
export class BackgroundDirective implements OnInit {

  @Input() myBackgroundDefault: string[] = ['#71081e', '#d7485c']
  @Input() myBackgroundHover: string[] = ['#b90b2f', '#f3697c']

  constructor(private el: ElementRef, private rend: Renderer2) {
  }

  @HostListener('mouseenter')
  mouseenterBg() {
    this.setColor(this.myBackgroundHover);
  }

  @HostListener('mouseleave')
  mouseleaveBg() {
    this.setColor(this.myBackgroundDefault);
  }

  ngOnInit() {
    this.setColor(this.myBackgroundDefault);
  }

  private setColor(color: string[]){
    this.el.nativeElement.style.backgroundImage =`linear-gradient(90deg, ${color[0]} 0%, ${color[1]} 100%)`
  }

}
