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
  public arrayHistory = signal<Set<GifInterface>>(new Set());
  public router = inject(Router);

  constructor() {
    effect(() => {
      this.loadData();
      console.log("disparado");
      console.log(this.arrayHistory.length);


    });
  }

  loadData = () => {
    this.arrayHistory.set(new Set(this.historyService.data().search.find(e => e.path === this.word())?.result ?? []));
  }
}
