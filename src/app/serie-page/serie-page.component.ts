import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriePageService } from './serie-page.service';

@Component({
  selector: 'app-serie-page',
  templateUrl: './serie-page.component.html',
  styleUrls: ['./serie-page.component.css']
})
export class SeriePageComponent implements OnInit {

  serie: any;
  credits: any;
  videos: any;
  comments: any;
  serieId: string = 'serie';
  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private serieService: SeriePageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initCurrentSerie();
  }

  getSerie() {
    this.serieService.getCurrentSerie(this.serieId).subscribe(response => {
      console.log(response);
      this.serie = response;
    })
  }

  getCredits() {
    this.serieService.getCreditsAboutSerie(this.serieId).subscribe(response => {
      console.log(response);
      this.credits = response;
    })
  }

  getVideos() {
    this.serieService.getVideosAboutSerie(this.serieId).subscribe(response => {
      console.log(response);
      this.videos = response;
    })
  }

  getComments() {
    this.serieService.getCommentsAboutSerie(this.serieId).subscribe(response => {
      console.log(response);
      this.comments = response;
    })
  }

  initCurrentSerie() {
    const id = this.route.snapshot.paramMap.get('serieId');
    if (id != null) {
      this.serieId = id;
    }
    this.serieService.getCurrentSerie(this.serieId).subscribe(response => {
      console.log(response);
      this.serie = response;
    })
    this.serieService.getCreditsAboutSerie(this.serieId).subscribe(response => {
      console.log(response);
      this.credits = response;
    })
    this.serieService.getVideosAboutSerie(this.serieId).subscribe(response => {
      console.log(response);
      this.videos = response;
    })
    this.serieService.getCommentsAboutSerie(this.serieId).subscribe(response => {
      console.log(response);
      this.comments = response;
    })
  }

}
