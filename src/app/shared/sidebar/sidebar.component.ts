import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  get history() {
    return this.gifsService.history;
  }

  get search() {
    return this.gifsService.searchGifs;
  }

  constructor(private gifsService: GifsService) {}
}
