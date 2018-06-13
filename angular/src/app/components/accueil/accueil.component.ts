import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @ViewChild('image') image: ElementRef;
  @ViewChild('texte') texte: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
    
    scroll = (): void => {
      this.renderer.setStyle(this.image.nativeElement, 'filter', 'brightness(' + (100 + (window.pageYOffset / 3)) + '%)');
      this.renderer.setStyle(this.texte.nativeElement, 'opacity', (window.pageYOffset / 400));
    };

}
