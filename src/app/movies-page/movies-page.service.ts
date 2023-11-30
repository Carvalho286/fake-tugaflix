import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesPageService {

  constructor(private http: HttpClient) { }

  apiKey = 'a42292b55bbc174fe9ef1262ce3bc921';

  getMovies(pageNumber: number, searchResult: string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&language=en-US&query=' + searchResult + '&page=' + pageNumber + '&include_adult=false');
  }

  getPopularMovies(pageNumber: number) {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey + '&language=en-US&page=' + pageNumber);
  }
}
