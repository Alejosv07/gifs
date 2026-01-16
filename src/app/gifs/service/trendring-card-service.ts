import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment";
import { GifInterface } from "../interface/GifInterface";
import { HttpClient } from "@angular/common/http";
import { mapperApiData } from "../interface/mapperApiData";
import { GIFInterfacesAPI } from "../interface/Gif.InterfacesApi";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TrendringCardService {

  cardsrc = signal<GifInterface[]>([]);
  page = signal(1);
  loading = signal(false);

  http = inject(HttpClient);
  mapper = new mapperApiData();

  private loadData(url: string): void {
    this.http.get<GIFInterfacesAPI>(url).subscribe(data => {
      const gifs = this.mapper.gifsApiArrayToGif(data);

      this.cardsrc.update(current => [
        ...current,
        ...gifs
      ]);
    });
  }

  loadTrending(): void {
    const offset = environment.limit * (this.page() - 1);

    this.loadData(
      `${environment.urlApi}/gifs/trending?api_key=${environment.apikeyGif}&limit=${environment.limit}&offset=${offset}&rating=${environment.rating}`
    );
  }

  resetData(): void {
    this.cardsrc.set([]);
    this.page.set(1);
  }

  searchData(word: string): Observable<GifInterface[]> {
    const offset = environment.limit * this.page();
    const url = `${environment.urlApi}/gifs/search?api_key=${environment.apikeyGif}&q=${word}&limit=${environment.limit}&offset=${offset}`;

    return this.http.get<GIFInterfacesAPI>(url).pipe(
      map(data => this.mapper.gifsApiArrayToGif(data))
    );
  }

  trendigScroll(): Observable<GifInterface[]> {
    const offset = environment.limit * this.page();

    const url = `${environment.urlApi}/gifs/trending?api_key=${environment.apikeyGif}&limit=${environment.limit}&offset=${offset}&rating=${environment.rating}`;

    return this.http.get<GIFInterfacesAPI>(url).pipe(
      map(data => this.mapper.gifsApiArrayToGif(data))
    );
  }
}
