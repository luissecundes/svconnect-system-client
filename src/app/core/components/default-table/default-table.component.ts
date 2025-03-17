import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DefaultTableComponent {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];
  @Input() actions: {
    icon: string;
    tooltip: string;
    action: (item: any) => void;
  }[] = [];
  @Input() showSelectionColumn: boolean = true;

  selectedItems: Set<any> = new Set();

  @Output() selectionChanged: EventEmitter<any[]> = new EventEmitter();

  toggleSelectAll(event: any) {
    if (event.target.checked) {
      this.data.forEach((item) => this.toggleSelectItem(item));
    } else {
      this.selectedItems.clear();
    }
    this.emitSelection();
  }

  toggleSelectItem(item: any) {
    if (this.selectedItems.has(item)) {
      this.selectedItems.delete(item);
    } else {
      this.selectedItems.add(item);
    }
    this.emitSelection();
  }

  isAllSelected(): boolean {
    return this.selectedItems.size === this.data.length;
  }

  isSelected(item: any): boolean {
    return this.selectedItems.has(item);
  }

  emitSelection() {
    this.selectionChanged.emit(Array.from(this.selectedItems));
  }

  getSelectedItems(): any[] {
    return Array.from(this.selectedItems);
  }
}
