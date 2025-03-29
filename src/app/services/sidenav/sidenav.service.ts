import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private collapsedSubject = new BehaviorSubject<boolean>(false);
  collapsed$ = this.collapsedSubject.asObservable();

  toggleCollapsed() {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }

  setCollapsed(collapsed: boolean) {
    this.collapsedSubject.next(collapsed);
  }
}
