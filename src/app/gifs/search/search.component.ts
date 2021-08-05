import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search = () => {
    const val = this.txtBuscar.nativeElement.value;

    if (val.trim().length === 0) {
      return;
    }

    this.gifsService.searchGifs(val);

    this.txtBuscar.nativeElement.value = '';
  };
}
