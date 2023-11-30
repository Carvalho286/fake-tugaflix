import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { SeriePageComponent } from './serie-page/serie-page.component';
import { SeriesPageComponent } from './series-page/series-page.component';
import { ActorPageComponent } from './actor-page/actor-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: LandingPageComponent},
  {path: 'movies-page',component: MoviesPageComponent},
  {path: 'series-page', component: SeriesPageComponent},
  {path: 'movie-detail/:movieId', component: MoviePageComponent},
  {path: 'serie-detail/:serieId', component: SeriePageComponent},
  {path: 'actor-detail/:actorId', component: ActorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
