import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccueilComponent } from './accueil/accueil.component';
import { RechercheGenreComponent } from './recherche-genre/recherche-genre.component';
import { ArtistComponent } from './artist/artist.component';
import { GeneralSearchMusicComponent } from './general-search-music/general-search-music.component';
import { ArtistsByGenreComponent } from './artists-by-genre/artists-by-genre.component';
import { ErrorComponent } from './error/error.component';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';
import { PlaylistComponent } from './playlist/playlist.component';
import {AccordionModule} from 'primeng/accordion';
import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    RechercheGenreComponent,
    GeneralSearchMusicComponent,
    ArtistsByGenreComponent,
    ErrorComponent,
	ArtistComponent,
 	TrackComponent,
 	AlbumComponent,
 	PlaylistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
	ReactiveFormsModule,
	AccordionModule,
	CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
