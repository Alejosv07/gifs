import { Injectable } from '@angular/core';
import { NavItemInterface } from '../interface/NavItem.interface';

@Injectable({providedIn: 'root'})
export class NavItemService {
  constructor() { }

  arrayNavItems: NavItemInterface[] = [];

  loadData = ()=> {
    if (this.arrayNavItems.length > 0) return;

    this.arrayNavItems.push({
      routerlink: '/dashboard/trending',
      title: "Trending",
      subtitle: "Trending gifs"
    });
    this.arrayNavItems.push({
      routerlink: '/dashboard/search',
      title: "Search",
      subtitle: "Search gifs"
    });
  }
}
