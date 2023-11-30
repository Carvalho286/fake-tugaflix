import { Component, OnInit } from '@angular/core';
import { SeriesPageService } from './series-page.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css']
})
export class SeriesPageComponent implements OnInit {

  pageNumber: number = 1;
  searchResult: string = '';
  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private serieService: SeriesPageService,
    private route: ActivatedRoute
  ) { }

  series: any;

  ngOnInit(): void {
    this.getSeries();
    this.getPopularSeries();
  }

  getPopularSeries() {
    this.serieService.getPopularSeries(this.pageNumber).subscribe(response => {
      console.log(response);
      this.series = response;
    })
  }

  getSeries() {
    this.serieService.getSeries(this.pageNumber, this.searchResult).subscribe(response => {
      console.log(response);
      this.series = response;
    })
  }

  selectPage(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getPopularSeries();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  onSubmit() {
    this.getSeries();
  }

}
