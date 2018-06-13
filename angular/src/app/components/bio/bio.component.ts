import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  @ViewChild('sambuca') sambuca: ElementRef;
  @ViewChild('cest') cest: ElementRef;
  @ViewChild('pointUn') pointUn: ElementRef;
  @ViewChild('pointDeux') pointDeux: ElementRef;
  @ViewChild('pointTrois') pointTrois: ElementRef;
  @ViewChild('duoTitle') duoTitle: ElementRef;
  @ViewChild('duoImg') duoImg: ElementRef;
  @ViewChild('article') article: ElementRef;
  @ViewChild('collabTitle') collabTitle: ElementRef;
  @ViewChild('collabImg') collabImg: ElementRef;

  constructor(elRef: ElementRef) { }

  ngOnInit() {
  	setTimeout(() => {
  	  this.sambuca.nativeElement.style.opacity = 1,
  	  this.sambuca.nativeElement.style.transition = 'opacity 1s'}, 
    500);
    setTimeout(() => {
      this.sambuca.nativeElement.style.opacity = 0,
	  this.sambuca.nativeElement.style.transition = 'opacity 1s'}, 
    1500);
  	setTimeout(() => {
  	  this.cest.nativeElement.style.opacity = 1,
  	  this.cest.nativeElement.style.transition = 'opacity 1s'}, 
    2500);
    setTimeout(() => {
  	  this.pointUn.nativeElement.style.opacity = 1,
  	  this.pointUn.nativeElement.style.transition = 'opacity .4s'}, 
    3500);
    setTimeout(() => {
  	  this.pointDeux.nativeElement.style.opacity = 1,
  	  this.pointDeux.nativeElement.style.transition = 'opacity .4s'}, 
    3900);
    setTimeout(() => {
  	  this.pointTrois.nativeElement.style.opacity = 1,
  	  this.pointTrois.nativeElement.style.transition = 'opacity .4s'}, 
    4400);
    setTimeout(() => {
      this.cest.nativeElement.style.opacity = 0,
	    this.cest.nativeElement.style.transition = 'opacity 1s'}, 
    4800);
    setTimeout(() => {
      this.duoTitle.nativeElement.style.opacity = 1,
	    this.duoTitle.nativeElement.style.transition = 'opacity 1s'}, 
    5400);
    setTimeout(() => {
      this.duoImg.nativeElement.style.opacity = 1,
	    this.duoImg.nativeElement.style.transition = 'opacity 2s',
	    this.article.nativeElement.style.display = 'inherit'}, 
    6400);
    setTimeout(() => {
      /*tentative de smooth scroll : */
      /*var x = setInterval(() => {
        var i = 0;
        while(i < 700) {
          window.scrollTo(0, i);
          i += 10;
        } 
        clearInterval(x);
      }, 500);*/
      if (window.innerWidth < 850) {
        window.scrollTo(0, 200)
      } else {
            window.scrollTo(0, 700)
          };
      this.collabTitle.nativeElement.style.opacity = 1,
	    this.collabTitle.nativeElement.style.transition = 'opacity 1s'}, 
    8600);
    setTimeout(() => {
      this.collabImg.nativeElement.style.opacity = 1,
	    this.collabImg.nativeElement.style.transition = 'opacity 1s'}, 
    9600);
  }

}
