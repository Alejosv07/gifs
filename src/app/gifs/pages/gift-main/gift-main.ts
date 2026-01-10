import { Component, effect, inject } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { RouterOutlet } from '@angular/router';
import { MenuUIService } from '../../service/menu-uiservice';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-gift-main',
  imports: [Menu, RouterOutlet, NgClass],
  templateUrl: './gift-main.html',
  styles: ``,
})
export class GiftMain {
  menuUIService = inject(MenuUIService);
}
