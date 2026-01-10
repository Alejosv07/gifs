import { HttpClient } from '@angular/common/http';
import { GifInterface } from '../interface/GifInterface';
import { inject, Injectable, signal } from '@angular/core';
import { GIFInterfacesAPI } from '../interface/Gif.InterfacesApi';
import { environment } from '../../../environments/environment';
import { mapperApiData } from '../interface/mapperApiData';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrendringCardService {
  cardsrc = signal<Set<GifInterface>>(new Set());
  http = inject(HttpClient);
  mapper = new mapperApiData;
  constructor(){
  }

  private loadData = (url: string) => {
    this.http.get<GIFInterfacesAPI>(url)
    .subscribe((data)=>{
      this.cardsrc.set(this.mapper.gifsApiArrayToGif(data));
    });
  }


  loadTrending = ()=>{
    this.loadData(`${environment.urlApi}/gifs/trending?api_key=${environment.apikeyGif}&limit=${environment.limit}&offset=${environment.offset}&rating=${environment.rating}`);
  }

  resetData = ()=>{
    this.cardsrc.set(new Set());
  }

searchData = (word: string): Observable<Set<GifInterface>> => {
    const url = `${environment.urlApi}/gifs/search?api_key=${environment.apikeyGif}&q=${word}&limit=${environment.limit}`;

    return this.http.get<GIFInterfacesAPI>(url).pipe(
      map(data => this.mapper.gifsApiArrayToGif(data)),
      tap(mappedData => this.cardsrc.set(mappedData))
    );
  }
}
