// core/services/detail-drawer.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DetailDrawerService {
  private _selectedItem = new BehaviorSubject<any>(null);
  selectedItem$ = this._selectedItem.asObservable();

  private _drawerVisible = new BehaviorSubject<boolean>(false);
  drawerVisible$ = this._drawerVisible.asObservable();

  open(item: any) {
    this._selectedItem.next(item);
    this._drawerVisible.next(true);
  }

  toggle(item: any) {
    const current = this._selectedItem.getValue();
    const isSame = current?.codigo === item?.codigo;

    if (isSame) {
      this._drawerVisible.next(false);
      setTimeout(() => this._selectedItem.next(null), 300);
    } else {
      this._selectedItem.next(item);
      this._drawerVisible.next(true);
    }
  }

  close() {
    this._drawerVisible.next(false);
    setTimeout(() => this._selectedItem.next(null), 300);
  }
}
