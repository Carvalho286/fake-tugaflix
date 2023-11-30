import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviePageService {

  constructor(private http: HttpClient) { }

  apiKey = 'a42292b55bbc174fe9ef1262ce3bc921';

  getCurrentMovie(movieId: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + this.apiKey + '&language=en-US');
  }
  getCreditsAboutMovie(movieId: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=' + this.apiKey + '&language=en-US')
  }
  getVideosAboutMovie(movieId: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=' + this.apiKey + '&language=en-US')
  }
  getCommentsAboutMovie(movieId:string) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/reviews?api_key=' + this.apiKey +'&language=en-US&page=1')
  }
}
