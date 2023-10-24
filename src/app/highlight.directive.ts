import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appHighlight >= 50) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'gold');
    } else if (this.appHighlight >= 20) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'lightblue'
      );
    }
  }
}
