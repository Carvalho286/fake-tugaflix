import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriePageService {

  constructor(private http: HttpClient) { }

  apiKey = 'a42292b55bbc174fe9ef1262ce3bc921';

  getCurrentSerie(serieId: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/' + serieId + '?api_key=' + this.apiKey + '&language=en-US')
  }

  getCreditsAboutSerie(serieId: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/' + serieId +'/credits?api_key=' + this.apiKey + '&language=en-US')
  }

  getVideosAboutSerie(serieId: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/' + serieId + '/videos?api_key=' + this.apiKey + '&language=en-US')
  }

  getCommentsAboutSerie(serieId: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/' + serieId + '/reviews?api_key=' + this.apiKey + '&language=en-US&page=1')
  }
}