import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SelectionService } from '../../services/selection/selection.service';
import { CommonModule } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnDestroy {
  @Output() insert = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() duplicate = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();

  dropdownOpen = false;
  selectedCount: number = 0;
  private routerSubscription: Subscription;

  constructor(
    private selectionService: SelectionService,
    private router: Router
  ) {
    this.selectionService.selectedItems$.subscribe((selectedItems) => {
      this.selectedCount = selectedItems.length;
    });

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.resetSelectionState();
      }
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

  resetSelectionState() {
    this.selectionService.clearSelection();
    this.selectedCount = 0;
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
