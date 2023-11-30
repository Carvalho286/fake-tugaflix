import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorPageService } from './actor-page.service';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.css']
})
export class ActorPageComponent implements OnInit {

  actor: any;
  actorMovies: any;
  actorSeries: any;
  actorId:string = "";
  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private actorService: ActorPageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initCurrentActor();
  }

  getActor() {
    this.actorService.getCurrentActor(this.actorId).subscribe(response => {
      console.log(response);
      this.actor = response;
    })
  }

  getActorMovies() {
    this.actorService.getActorMovies(this.actorId).subscribe(response => {
      console.log(response);
      this.actorMovies = response;
    })
  }

  getActorSeries() {
    this.actorService.getActorSeries(this.actorId).subscribe(response => {
      console.log(response);
      this.actorSeries = response;
    })
  }

  initCurrentActor() {
    const id = this.route.snapshot.paramMap.get('actorId');
    if (id != null) {
      this.actorId = id;
    }
    this.actorService.getCurrentActor(this.actorId).subscribe(response => {
      console.log(response);
      this.actor = response;
    })
    this.actorService.getActorMovies(this.actorId).subscribe(response => {
      console.log(response);
      this.actorMovies = response;
    })
    this.actorService.getActorSeries(this.actorId).subscribe(response => {
      console.log(response);
      this.actorSeries = response;
    })
  }

}
