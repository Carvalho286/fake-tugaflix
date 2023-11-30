import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { LandingPageService } from './landing-page/landing-page.service'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { FormsModule } from '@angular/forms';
import { SeriesPageComponent } from './series-page/series-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MoviePageService } from './movie-page/movie-page.service';
import { SeriePageComponent } from './serie-page/serie-page.component';
import { ActorPageComponent } from './actor-page/actor-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MoviesPageComponent,
    SeriesPageComponent,
    MoviePageComponent,
    SeriePageComponent,
    ActorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
  ],
  providers: [LandingPageService, MoviePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
