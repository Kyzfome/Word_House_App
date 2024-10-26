import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { PhotoComponent } from './photo/photo.component';
import { ArtistsComponent } from './artists/artists.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'film', component: FilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
