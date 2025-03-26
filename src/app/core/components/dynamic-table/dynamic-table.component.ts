import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DynamicTableComponent {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];
  @Input() actions: {
    icon: string;
    tooltip: string;
    action: (item: any) => void;
  }[] = [];
  @Input() showSelectionColumn: boolean = true;

  @Output() selectionChanged: EventEmitter<any[]> = new EventEmitter();

  selectedItems: Set<any> = new Set();
  sortColumn: string = ''; // Coluna para ordenação
  sortDirection: 'asc' | 'desc' = 'asc'; // Direção da ordenação

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

  // Função para ordenar os dados
  sortData(columnKey: string) {
    if (this.sortColumn === columnKey) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = columnKey;
      this.sortDirection = 'asc';
    }

    this.data.sort((a, b) => {
      const valA = a[columnKey];
      const valB = b[columnKey];

      if (valA < valB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valA > valB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  // Método para verificar se a coluna está ordenada
  isSorted(columnKey: string): boolean {
    return this.sortColumn === columnKey;
  }

  // Método para verificar a direção da ordenação
  getSortDirection(columnKey: string): string {
    return this.sortColumn === columnKey ? this.sortDirection : '';
  }


  trackItem(index: number, item: any): any {
    return item ? item.id || item : index;
  }
}
