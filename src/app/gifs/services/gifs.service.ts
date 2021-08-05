import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse, Datum } from 'src/app/interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _URLSERVICE = 'https://api.giphy.com/v1/gifs';
  private _APIKEY = 'yh5frRlMmEfMWCPpZ6fGazvWVJ0NQAns';
  private _history: string[] = [];
  public results: Datum[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    const historyFromLocal = localStorage.getItem('history');
    const lastSearchFromLocal = localStorage.getItem('lastSearch');

    if (historyFromLocal) {
      this._history = JSON.parse(historyFromLocal);
    }

    if (lastSearchFromLocal) {
      this.results = JSON.parse(lastSearchFromLocal);
    }
  }

  searchGifs = (query: string) => {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 9);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this._APIKEY)
      .set('limit', 10)
      .set('q', query);

    this.http
      .get<DataResponse>(`${this._URLSERVICE}/search`, { params })
      .subscribe(({ data }) => {
        this.results = data;

        localStorage.setItem('lastSearch', JSON.stringify(data));
      });
  };
}
