import { trigger, transition, style, animate } from '@angular/animations';
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
  animations: [
    trigger('flipIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotateY(-90deg)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'rotateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'rotateY(90deg)' })
        ),
      ]),
    ]),
  ],
})
export class MenuComponent implements OnDestroy {
  @Output() insert = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() duplicate = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();

  dropdownOpen = false;
  hasEdited: boolean = false;
  shouldPreserveSelection = false;

  selectedCount: number = 0;
  private routerSubscription: Subscription;

  constructor(
    private selectionService: SelectionService,
    private router: Router
  ) {
    this.selectionService.selectedItems$.subscribe((selectedItems) => {
      this.selectedCount = selectedItems.length;
      this.hasEdited = this.selectedCount === 1;
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
    this.shouldPreserveSelection = true;
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
    this.dropdownOpen = false;
  }

  onDuplicate() {
    this.duplicate.emit();
    this.dropdownOpen = false;
  }

  onExport() {
    this.export.emit();
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  resetSelectionState() {
    if (this.shouldPreserveSelection) {
      this.shouldPreserveSelection = false;
      return;
    }

    this.selectionService.clearSelection();
    this.selectedCount = 0;
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
