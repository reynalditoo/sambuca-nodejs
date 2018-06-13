import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
    
    scroll = (): void => {
      this.renderer.setStyle(this.elRef.nativeElement, 'filter', 'brightness(' + (100 + (window.pageYOffset / 3)) + '%)');
    };

}