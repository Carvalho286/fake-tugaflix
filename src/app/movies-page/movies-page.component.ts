import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {MoviesPageService} from './movies-page.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  pageNumber: number = 1;
  searchResult: string = '';
  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private movieService: MoviesPageService,
    private route: ActivatedRoute
  ) { }

  movies: any;

  ngOnInit(): void {
    this.getMovies();
    this.getPopularMovies();
  }

  

  getPopularMovies() {
    this.movieService.getPopularMovies(this.pageNumber).subscribe(response => {
      console.log(response);
      this.movies = response;
    })
  }

  getMovies() {
    this.movieService.getMovies(this.pageNumber, this.searchResult).subscribe(response => {
      console.log(response);
      this.movies = response;
    });
  }

  selectPage(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getPopularMovies();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  onSubmit() {
    this.getMovies();
  }
}
