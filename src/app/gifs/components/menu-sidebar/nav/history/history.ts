import { Component, inject, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { NavItemInterface } from '../../../../interface/NavItem.interface';
import { HistoryService } from '../../../../service/history.service';
import { HistoryInterface } from '../../../../interface/history.interface';

@Component({
  selector: 'app-history',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './history.html',
  styles: ``,
})
export class History {
  navItems = input.required<NavItemInterface[]>();

  historyService = inject(HistoryService);
  router = inject(Router);

  deleteOne = (id: string) => {
    let historySearchTemp =
      this.historyService.data().search.filter((e) => {
        return e.path !== id
      });
    this.historyService.save({ key: "local", search: historySearchTemp});

  }

}
