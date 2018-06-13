import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { BioComponent } from './components/bio/bio.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VideosComponent } from './components/medias/videos/videos.component';
import { MusiqueComponent } from './components/medias/musique/musique.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
	{ path: '', component: AccueilComponent, pathMatch: 'full' },
	{ path: 'accueil', component: AccueilComponent },
	{ path: 'bio', component: BioComponent },
	{ path: 'photos', component: PhotosComponent },
	{ path: 'videos', component: VideosComponent },
	{ path: 'musique', component: MusiqueComponent },
	{ path: 'agenda', component: AgendaComponent },
	{ path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}