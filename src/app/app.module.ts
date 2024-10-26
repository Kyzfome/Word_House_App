import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { FilmComponent } from './film/film.component';
import { PhotoComponent } from './photo/photo.component';
import { ArtistsComponent } from './artists/artists.component';
import { ContainerComponent } from './container/container.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoryComponent,
    FilmComponent,
    PhotoComponent,
    ArtistsComponent,
    ContainerComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
