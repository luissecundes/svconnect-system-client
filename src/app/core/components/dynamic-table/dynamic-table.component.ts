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

  // Estado da seleção
  selectedItems: Set<any> = new Set();

  @Output() selectionChanged: EventEmitter<any[]> = new EventEmitter();

  // Seleciona/deseleciona todos os itens
  toggleSelectAll(event: any) {
    if (event.target.checked) {
      this.data.forEach((item) => this.toggleSelectItem(item));
    } else {
      this.selectedItems.clear();
    }
    this.emitSelection();
  }

  // Alterna a seleção de um item individual
  toggleSelectItem(item: any) {
    if (this.selectedItems.has(item)) {
      this.selectedItems.delete(item);
    } else {
      this.selectedItems.add(item);
    }
    this.emitSelection();
  }

  // Verifica se todos os itens estão selecionados
  isAllSelected(): boolean {
    return this.selectedItems.size === this.data.length;
  }

  // Verifica se um item está selecionado
  isSelected(item: any): boolean {
    return this.selectedItems.has(item);
  }

  // Emite os itens selecionados para o componente pai
  emitSelection() {
    this.selectionChanged.emit(Array.from(this.selectedItems));
  }

  // Retorna os itens selecionados

  getSelectedItems(): any[] {
    return Array.from(this.selectedItems);
  }
}
