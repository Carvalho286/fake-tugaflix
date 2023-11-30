import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private http: HttpClient) { }

  apiKey = 'a42292b55bbc174fe9ef1262ce3bc921';

  getNowPlayingMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.apiKey);
  }

  getSeriesOnAir() {
    return this.http.get<any>('https://api.themoviedb.org/3/tv/on_the_air?api_key=' + this.apiKey);
  }
}
