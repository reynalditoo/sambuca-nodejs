import { Pipe, PipeTransform, Renderer2 } from '@angular/core';

@Pipe({
  name: 'nextevent'
})
export class NexteventPipe implements PipeTransform {

  date = new Date();
  currentDay = this.date.getDate();
  currentMonth = (this.date.getMonth() + 1); // car janvier == 0, février == 1, etc.
  currentYear = this.date.getFullYear();

  transform(value: any, args?: any): any {

  	const concertDay = Number(value.substr(0, 2));
  	const concertMonth = Number(value.substr(3, 2));
  	const concertYear = Number('20' + value.substr(6, 3));
   	
   	if (concertYear === this.currentYear && concertMonth === this.currentMonth && concertDay >= this.currentDay) {
   		return value + ' (>>PROCHAIN CONCERT<<)';
   	} else if(concertYear === this.currentYear && concertMonth === (this.currentMonth + 1)) {
   		return value + ' (>>PROCHAIN CONCERT<<)';
   	}
   	return value; // quoi qu'il en soit, afficher toutes les dates de concerts
  }

}
