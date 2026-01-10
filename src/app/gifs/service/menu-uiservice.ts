import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuUIService {
  private _isMenuOpen = signal(false);

  isMenuOpen = this._isMenuOpen.asReadonly();

  toggleMenu() {
    this._isMenuOpen.update(state => !state);
  }

  closeMenu() {
    this._isMenuOpen.set(false);
  }
}
