import { Component, OnInit } from '@angular/core';

import { LandingPageService } from './landing-page.service';
import { ActivatedRoute } from '@angular/router';

// export class PlayingMovie{
//   constructor(  
//     // public adult: boolean,
//     // public backdrop_path: string,
//     // public genre_ids: string[],
//     public id: number,
//     public original_language: string,
//     // public original_title: string,
//     // public overview: string,
//     // public popularity: number,
//     // public poster_path: string,
//     public release_date: string,
//     public title: string,
//     // public video: boolean, 
//     public vote_average: number,
//     // public vote_count: number,
//   ) {

//   }
// }

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  
  constructor(
    private movieService: LandingPageService,
    private seriesService: LandingPageService,
    private route: ActivatedRoute
  ) { }

    nowPlayingMovies: any;
    seriesOnAir: any;

  ngOnInit(): void {
    this.getNowPlayingMovies();
    this.getSeriesOnAir();
  }

  getNowPlayingMovies() {
    this.movieService.getNowPlayingMovies().subscribe(response => {
      console.log(response);
      this.nowPlayingMovies = response;
    });
  }

  getSeriesOnAir() {
    this.seriesService.getSeriesOnAir().subscribe(response => {
      console.log(response);
      this.seriesOnAir = response;
    });
  }
}
