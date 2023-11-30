import { Component, OnInit } from '@angular/core';
import { MoviePageService } from './movie-page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movie: any;
  credits: any;
  videos: any;
  comments: any;
  movieId:string =  '';
  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private movieService: MoviePageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initCurrentMovie();
  }

  getMovie() {
    this.movieService.getCurrentMovie(this.movieId).subscribe(response => {
      console.log(response);
      this.movie = response;
    })
  }

  getCredits() {
    this.movieService.getCreditsAboutMovie(this.movieId).subscribe(response => {
      console.log(response);
      this.credits = response;
    })
  }

  getVideos() {
    this.movieService.getVideosAboutMovie(this.movieId).subscribe(response => {
      console.log(response);
      this.videos = response;
    })
  }

  getComments() {
    this.movieService.getCommentsAboutMovie(this.movieId).subscribe(response => {
      console.log(response);
      this.comments = response;
    })
  }

  initCurrentMovie() {
    const id = this.route.snapshot.paramMap.get('movieId');
    if( id != null) {
      this.movieId = id;
    }
    this.movieService.getCurrentMovie(this.movieId).subscribe(response => {
      console.log(response);
      this.movie = response;
    })
    this.movieService.getCreditsAboutMovie(this.movieId).subscribe(response => {
      console.log(response);
      this.credits = response;
    })
    this.movieService.getVideosAboutMovie(this.movieId).subscribe(response => {
      console.log(response);
      this.videos = response;
    })
    this.movieService.getCommentsAboutMovie(this.movieId).subscribe(response => {
      console.log(response);
      this.comments = response;
    })
  }

}
