import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {


	constructor() {}

    ngOnInit() {
       
    }

    btn;

    dates = {
        '2018': [
                    '07/06/18 : Le Marcounet, Paris',
                    '26/05/18 : 38Riv Jazz Club, Paris',
                    '13/05/18 : Le Marcounet, Paris',
                    '12/05/18 : Café de la Paix, Auvers sur Oise',
                    '05/04/18 : Théâtre Aleph, Ivry sur Seine, IdF',
                    '16/03/18 : Festival Jazz ‘In Funzione’, Roma, Italie',
                    '13/03/18 : Péniche Anako, Paris'
                ],
        '2017': [
                    '03/12/17 : Jazz Brunch, Péniche Le Marcounet, Paris',
                    '01/12/17 : La Place Rouge, Le Kremlin-Bicêtre, IdF',
                    '24/11/17 : Vitry Fada, Vitry Sur Seine, IdF',
                    '18/11/17 : Le 38 Riv’ Jazz Club, Paris',
                    '27/10/17 : La Place Rouge, Le Kremlin-Bicêtre, IdF',
                    '08/10/17 : La Bellevilloise, Paris',
                    '05/10/17 : Les Disquaires, Paris',
                    '30/09/17 : Café de la paix, Auvers sur Oise, IdF',
                    '29/09/17 : Apero concert festival, Théâtre Comedie Nation, Paris',
                    '24/09/17 : Théâtre Végétal , Friardel, Basse-Normandie',
                    '11/09/17 : Péniche Le Marcounet, Paris',
                    '09/09/17 : Péniche Lapin Vert, Jointville-lepont, IdF',
                    '15/07/17 : Paris Plage Péniche Le Marcounet, Paris',
                    '06/07/17 : Le Petit Gorille, Paris',
                    '14/06/17 : Péniche Le Marcounet, Paris',
                    '13/06/17 : Péniche Le Marcounet, Paris',
                    '16/05/17 : La Javelle, Paris',
                    '11/05/17 : Le Petit Gorille, Paris',
                    '23/04/17 : La Bellevilloise, Paris',
                    '22/02/17 : Le Petit Gorille, Diner Jazz, Paris',
                    '17/02/17 : Le 38 Riv’ Jazz Club, Paris'
                ]
    }

    keys = Object.keys(this.dates).reverse(); // car par défaut les années apparaissent de haut en bas dans l'ordre croissant

}
