import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { BioComponent } from './components/bio/bio.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ContactComponent } from './components/contact/contact.component';
import { VideosComponent } from './components/medias/videos/videos.component';
import { MusiqueComponent } from './components/medias/musique/musique.component';

import { MainService } from './services/main.service';
import { ContactService } from './components/contact/contact.service';
import { ParallaxDirective } from './directives/parallax.directive';
import { SafePipe } from './components/medias/safe.pipe';
import { NexteventPipe } from './components/agenda/nextevent.pipe';
import { SideMusicComponent } from './components/side-music/side-music.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    BioComponent,
    PhotosComponent,
    AgendaComponent,
    ContactComponent,
    VideosComponent,
    MusiqueComponent,
    ParallaxDirective,
    SafePipe,
    NexteventPipe,
    SideMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MainService, ContactService, [{provide: LocationStrategy, useClass: HashLocationStrategy}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
