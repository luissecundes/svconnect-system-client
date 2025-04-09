import { Component, Input } from '@angular/core';
import { ActionButton } from '../../core/interfaces/action-button.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-buttons',
  imports: [CommonModule],
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
  standalone: true,
})
export class ActionButtonsComponent {
  @Input() buttons: ActionButton[] = [];
}
