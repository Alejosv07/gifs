import { Component, effect, inject, input, signal } from '@angular/core';
import { HistoryService } from '../../service/history.service';
import { GifInterface } from '../../interface/GifInterface';
import { ListGif } from '../../components/trending/list-gif/list-gif';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.html',
  imports: [ListGif],
  styles: ``,
})
export class History {
  private historyService = inject(HistoryService);
  public word = input.required<string>();
  public arrayHistory = signal<GifInterface[]>([]);
  public router = inject(Router);

  constructor() {
  effect(() => {
    const word = this.word();
    console.log("efec disparado");

    this.loadData(word);
  });
  }

  loadData = (word:string) => {
    const array = this.historyService.data().search.find(e => e.path === word)?.result ?? [];
    this.arrayHistory.set([...array]);
  }
}
