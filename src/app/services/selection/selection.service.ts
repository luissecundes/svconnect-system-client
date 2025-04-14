import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  private selectedItemsSubject = new BehaviorSubject<any[]>([]);
  selectedItems$ = this.selectedItemsSubject.asObservable();

  updateSelection = (selectedItems: any[]) =>
    this.selectedItemsSubject.next(selectedItems);

  clearSelection = () => this.selectedItemsSubject.next([]);
}
