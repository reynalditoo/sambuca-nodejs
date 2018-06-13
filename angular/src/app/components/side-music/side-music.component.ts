import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-music',
  templateUrl: './side-music.component.html',
  styleUrls: ['./side-music.component.css']
})
export class SideMusicComponent implements OnInit {

  @ViewChild('tracks') tracks: ElementRef;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {}

  onHover() {
  	this.tracks.nativeElement.style.right = '6px';
  	this.tracks.nativeElement.style.transition = 'right 1s';
  }

  onLeave() {
  	this.tracks.nativeElement.style.right = '-82px';
  	this.tracks.nativeElement.style.transition = 'right 1s';
  }

}
