import { Component, effect, inject } from '@angular/core';
import { TrendingPage } from "../trending-page/trending-page";
import { TrendringCardService } from '../../service/trendring-card-service';
import { HistoryService } from '../../service/history.service';
import { MenuUIService } from '../../service/menu-uiservice';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [TrendingPage, NgClass],
  templateUrl: './search.html',
  styles: ``,
})
export class Search {


  public gifservice = inject(TrendringCardService);

  public historyService = inject(HistoryService);
  public menuUIService = inject(MenuUIService);

  constructor() {
  }

  public word: string = "";

  searchWord = (word: string) => {
    this.word = word;
    this.gifservice.searchData(word).subscribe((e)=>{
      this.gifservice.cardsrc.set(e);
      const data = this.gifservice.cardsrc();
      this.historyService.save({ key: "local", search: [...this.historyService.getAll().search, { path: this.word, result: Array.from(data) }] });
    });

  }

}
