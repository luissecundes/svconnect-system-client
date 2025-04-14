import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
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

