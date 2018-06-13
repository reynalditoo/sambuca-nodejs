import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  photos = [
  	'../../../assets/photos/un.jpg',
  	'../../../assets/photos/deux.jpg',
  	'../../../assets/photos/trois.jpg',
  	'../../../assets/photos/quatre.jpg',
  	'../../../assets/photos/cinq.jpg',
  	'../../../assets/photos/six.jpg',
  	'../../../assets/photos/sept.jpg',
  	'../../../assets/photos/huit.jpg',
  	'../../../assets/photos/neuf.jpg',
  	'../../../assets/photos/dix.jpg',
  	'../../../assets/photos/onze.jpg',
  	'../../../assets/photos/douze.jpg',
  	'../../../assets/photos/treize.jpg',
  	'../../../assets/photos/quatorze.jpg',
  	'../../../assets/photos/quinze.jpg',
  	'../../../assets/photos/seize.jpg'
  ]

  onClick(data: [string]) {
  	this.mainService.photoClicked = data;
  	console.log(data);
  }

}
