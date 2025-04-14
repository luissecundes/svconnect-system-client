import { Component, Output, EventEmitter } from '@angular/core';
import { SelectionService } from '../../services/selection/selection.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() insert = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() duplicate = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();

  dropdownOpen = false;
  selectedCount: number = 0;

  constructor(private selectionService: SelectionService) {
    this.selectionService.selectedItems$.subscribe((selectedItems) => {
      this.selectedCount = selectedItems.length;
    });
  }

  onInsert() {
    this.insert.emit();
  }

  onEdit() {
    this.edit.emit();
  }

  onOption1() {
    this.delete.emit();
    this.dropdownOpen = false;
  }

  onOption2() {
    this.duplicate.emit();
    this.dropdownOpen = false;
  }

  onOption3() {
    this.export.emit();
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
