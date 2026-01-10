import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { NavItemInterface } from '../../../interface/NavItem.interface';
import { History } from './history/history';
import { MapperHistoryNav } from '../../../service/mapper-history-nav';
import { HistoryService } from '../../../service/history.service';

@Component({
  selector: 'menu-sidebar-nav',
  imports: [RouterLink, RouterLink, RouterLinkActive, History],
  templateUrl: './nav.html',
  styles: ``,
})
export class Nav {
  navItems = input.required<NavItemInterface[]>();
  mapperHistory = inject(MapperHistoryNav);
  historyService = inject(HistoryService);
  private router = inject(Router);

  navItemsHistory = computed(() =>
    this.mapperHistory.convertHistoryToNav(this.historyService.data())
  );
  constructor(){
  }

  deleteAllHistory = ()=>{
    this.historyService.delete("local");
    this.router.navigate(['/dashboard/search']);
  }

}
