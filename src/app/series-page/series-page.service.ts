import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesPageService {

  constructor(private http: HttpClient) { }

  apiKey = 'a42292b55bbc174fe9ef1262ce3bc921';

  getSeries(pageNumber: number, searchResult: string) {
    return this.http.get('https://api.themoviedb.org/3/search/tv?api_key=' + this.apiKey + '&language=en-US&page=' + pageNumber + '&query=' + searchResult + '&include_adult=false');
  }

  getPopularSeries(pageNumber: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=' + this.apiKey + '&language=en-US&page=' + pageNumber);
  }
}
