import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseover') mouseoverHandler() {
    this.renderer.addClass(this.el.nativeElement, 'border');
    this.renderer.addClass(this.el.nativeElement, 'border-primary');
  }
  @HostListener('mouseleave') mouseleaveHandler() {
    this.renderer.removeClass(this.el.nativeElement, 'border');
    this.renderer.removeClass(this.el.nativeElement, 'border-primary');
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}