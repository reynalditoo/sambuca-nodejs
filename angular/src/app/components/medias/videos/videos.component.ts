import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // sans 'embed' => message d'erreur dans la console
  videos = [
  	'https://www.youtube.com/embed/MW5jp17zclA',
  	'https://www.youtube.com/embed/PT2Tfm_2Wrc',
  	'https://www.youtube.com/embed/vyqkMRH0P90',
  	'https://www.youtube.com/embed/uWvLJp7PULw'
  ]

}
