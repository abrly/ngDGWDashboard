import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  private selectedMenu = new BehaviorSubject<String>('');


  constructor() { }

  set onSelectedMenu(menuItem:string){
    
  }

  setActiveMenu(mnu: string){
    this.selectedMenu.next(mnu);
  }
  
  get activeMenu() {
    return this.selectedMenu.asObservable().pipe(
      map(m => {
        if (m) {
          return m;
        } else {
          return '';
        }
      })
    );
  }

}
