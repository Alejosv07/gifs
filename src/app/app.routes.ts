import { Routes } from '@angular/router';
import { GiftMain } from './gifs/pages/gift-main/gift-main';
import { TrendingPage } from './gifs/pages/trending-page/trending-page';
import { Search } from './gifs/pages/search/search';
import { History } from './gifs/pages/history/history';

export const routes: Routes = [
  {
    path: "dashboard",
    component: GiftMain,
    children: [
      { path: "trending", component: TrendingPage, data: { loadOnInit: true } },
      { path: "search", component: Search, data: { loadOnInit: false } },
      { path: "history/:word", component: History },
      { path: "", redirectTo: "trending", pathMatch: "full" }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard/trending"
  }
];
