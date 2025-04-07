// detail-drawer.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-drawer',
  imports: [CommonModule],
  templateUrl: './detail-drawer.component.html',
  styleUrls: ['./detail-drawer.component.scss'],
})
export class DetailDrawerComponent {
  @Input() data: any;
  @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  closeDrawer() {
    this.onClose.emit();
  }
}
