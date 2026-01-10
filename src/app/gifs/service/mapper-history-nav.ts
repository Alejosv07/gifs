import { Injectable } from '@angular/core';
import { HistoryInterface } from '../interface/history.interface';
import { NavItemInterface } from '../interface/NavItem.interface';

@Injectable({
  providedIn: 'root',
})

export class MapperHistoryNav {
    public convertHistoryToNav = (history: HistoryInterface):NavItemInterface[]=>{
    return history.search.map((e)=>{
      return {
        routerlink: "history/"+e.path,
        title: e.path,
        subtitle: "",
      }
    });
  }
}
