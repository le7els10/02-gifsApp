import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import 'masonry-layout';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  get results() {
    return this.gifsService.results;
  }

  constructor(private gifsService: GifsService) {}
}
