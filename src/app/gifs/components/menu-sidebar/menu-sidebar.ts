import { Component, inject } from '@angular/core';
import { Logo } from "./logo/logo";
import { Profile } from "./profile/profile";
import { Nav } from "./nav/nav";
import { NavItemService } from '../../service/NavItemService';
import { MenuUIService } from '../../service/menu-uiservice';

@Component({
  selector: 'app-menu-sidebar',
  imports: [Logo, Profile, Nav],
  templateUrl: './menu-sidebar.html',
  styles: ``,
})
export class MenuSidebar {
  navItemService = inject(NavItemService);
  menuUIService = inject(MenuUIService);

  constructor() {
    this.navItemService.loadData();
  }

}
