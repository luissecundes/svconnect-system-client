import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-detail-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-drawer.component.html',
  styleUrls: ['./detail-drawer.component.scss'],
})
export class DetailDrawerComponent implements OnChanges {
  @Input() data: Record<string, any> = {};
  @Input() visible: boolean = false;
  @Input() labelsMap: Record<string, string> = {};
  @Input() title: string = 'Detalhes';

  @Output() onClose = new EventEmitter<void>();

  fadeIn = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.visible) {
      this.triggerFadeIn();
    }
  }

  triggerFadeIn() {
    this.fadeIn = false;
    setTimeout(() => {
      this.fadeIn = true;
    }, 0);
  }

  closeDrawer() {
    this.onClose.emit();
  }

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  getLabel(key: string): string {
    return this.labelsMap[key] || key;
  }
}
