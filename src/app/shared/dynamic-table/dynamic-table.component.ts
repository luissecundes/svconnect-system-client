import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicColumn } from '../../core/interfaces/dynamic-column.interface';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DynamicTableComponent {
  @Input() columns: DynamicColumn[] = [];
  @Input() data: any[] = [];
  @Input() actions: {
    icon: string;
    tooltip: string;
    action: (item: any) => void;
  }[] = [];
  @Input() showSelectionColumn: boolean = true;

  @Output() selectionChanged = new EventEmitter<any[]>();
  @Output() rowClicked = new EventEmitter<any>();

  selectedItems = new Set<any>();
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  currentPage = 1;
  itemsPerPage = 10;

  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  get paginatedData(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(start, start + this.itemsPerPage);
  }

  getPages(): (number | string)[] {
    const pages: (number | string)[] = [];
    const total = this.totalPages;

    if (total <= 4) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      if (this.currentPage <= 3) {
        pages.push(1, 2, 3, '...', total);
      } else if (this.currentPage >= total - 2) {
        pages.push(1, '...', total - 2, total - 1, total);
      } else {
        pages.push(1, '...', this.currentPage, '...', total);
      }
    }

    return pages;
  }

  handlePageClick(page: number | string) {
    if (typeof page === 'number') {
      this.goToPage(page);
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onRowClick(item: any) {
    this.rowClicked.emit(item);
  }

  toggleSelectAll(event: any) {
    if (event.target.checked) {
      this.data.forEach((item) => this.selectedItems.add(item));
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

  isSelected(item: any): boolean {
    return this.selectedItems.has(item);
  }

  emitSelection() {
    this.selectionChanged.emit(Array.from(this.selectedItems));
  }

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

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  getPaymentColor(paymentMethod: string): string {
    const colors: { [key: string]: string } = {
      Dinheiro: '🟢',
      Cheque: '🟠',
      Pix: '🔴',
      'Cartão de Crédito': '🔵',
      'Cartão de Débito': '🔷',
    };
    return colors[paymentMethod] || '⚫';
  }

  isSorted(columnKey: string): boolean {
    return this.sortColumn === columnKey;
  }

  trackItem(index: number, item: any): any {
    return item?.id ?? index;
  }
}
