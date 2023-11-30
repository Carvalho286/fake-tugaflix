import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorPageService {

  constructor(private http: HttpClient) { }

  apiKey = 'a42292b55bbc174fe9ef1262ce3bc921';

  getCurrentActor(actorId: string) {
    return this.http.get('https://api.themoviedb.org/3/person/' + actorId + '?api_key=' + this.apiKey + '&language=en-US')
  }

  getActorMovies(actorId: string) {
    return this.http.get('https://api.themoviedb.org/3/person/' + actorId + '/movie_credits?api_key=' + this.apiKey + '&language=en-US')
  }

  getActorSeries(actorId: string) {
    return this.http.get('https://api.themoviedb.org/3/person/' + actorId + '/tv_credits?api_key=' + this.apiKey + '&language=en-US')
  }
}
