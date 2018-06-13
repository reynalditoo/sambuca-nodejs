import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css']
})
export class MusiqueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tracks = [
  	'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331645485&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  	'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206367724&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  	'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174051223&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
  ]

}
