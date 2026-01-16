import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { Router, RouterOutlet } from '@angular/router';
import { MenuUIService } from '../../service/menu-uiservice';
import { NgClass } from '@angular/common';
import { TrendringCardService } from '../../service/trendring-card-service';
import { environment } from '../../../../environments/environment';
import { mapperApiData } from '../../interface/mapperApiData';

@Component({
  selector: 'app-gift-main',
  imports: [Menu, RouterOutlet, NgClass],
  templateUrl: './gift-main.html',
  styles: ``,
})
export class GiftMain {
  menuUIService = inject(MenuUIService);

  public divContainer = viewChild<ElementRef<HTMLDivElement>>("containerTrendingPage");

  public cardsService = inject(TrendringCardService);
  private router = inject(Router);

  mapper = new mapperApiData();

  scrollInfinity = () => {
    const container = this.divContainer()?.nativeElement;
    if (!container || this.cardsService.loading()) return;

    const threshold = 100;
    const currentScroll = container.scrollTop + container.clientHeight;

    if (currentScroll + threshold >= container.scrollHeight) {

      this.cardsService.loading.set(true);
      this.cardsService.page.update(p => p + 1);
      if (this.router.url.includes("dashboard/search")) {
        console.log(this.router.url.split("/search/"));

      }else if(this.router.url.includes("dashboard/trending")){
        this.cardsService.trendigScroll().subscribe({
          next: data => {
            this.cardsService.cardsrc.update(current => [
              ...current,
              ...data
            ]);
          },
          complete: () => this.cardsService.loading.set(false),
          error: () => this.cardsService.loading.set(false),
        });
      }


    }
  }

}
