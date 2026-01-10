import { inject, Injectable, signal } from '@angular/core';
import { IRepository } from '../interface/IRepository';
import { LocalStorageService } from './LocalStorageService';
import { HistoryInterface } from '../interface/history.interface';

@Injectable({ providedIn: 'root' })
export class HistoryService implements IRepository<HistoryInterface, string> {
  private localService = inject(LocalStorageService);

  constructor() { }
  public keySave = "local";

  public _history = signal<HistoryInterface>(this.loadFromStorage());

  public readonly data = this._history.asReadonly();

  private loadFromStorage(): HistoryInterface {
    const raw = localStorage.getItem('local');
    return raw ? JSON.parse(raw) : { key: this.keySave, search: [] };
  }

  getAll(): HistoryInterface {
    return this.data();
  }


  save(t: HistoryInterface): HistoryInterface {
    this.localService.saveLocal(this.keySave, JSON.stringify(t));
    this._history.set(t)
    return t;
  }

  delete(id: string): void {
    this.localService.removeLocal(id);
    this._history.set({ key: 'local', search: [] });
  }

}
