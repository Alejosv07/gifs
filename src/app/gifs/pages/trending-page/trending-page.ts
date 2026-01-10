import { Component, inject, input } from '@angular/core';
import { TrendringCardService } from '../../service/trendring-card-service';
import { ActivatedRoute } from '@angular/router';
import { ListGif } from "../../components/trending/list-gif/list-gif";

@Component({
  selector: 'app-trending-page',
  imports: [ListGif],
  templateUrl: './trending-page.html',
  styles: ``,
})
export class TrendingPage {
  private route = inject(ActivatedRoute);
  public cardsService = inject(TrendringCardService);
  constructor(){
    const config = this.route.snapshot.data['loadOnInit'];

    if (config) {
      this.cardsService.loadTrending();
    }else{
      this.cardsService.resetData();
    }
  }

}
