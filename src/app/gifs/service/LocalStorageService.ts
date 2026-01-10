import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorageService {
  constructor() { }

  saveLocal = (key:string,data: string)=>{
    localStorage.setItem(key,data);
  }

  removeLocal = (key: string)=>{
    localStorage.removeItem(key);
  }

  getLocal = (key:string)=>{
    return localStorage.getItem(key);
  }
}
