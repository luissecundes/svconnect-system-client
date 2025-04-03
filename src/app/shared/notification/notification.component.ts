import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="message$ | async as message" class="notification">
      {{ message }}
    </div>
  `,
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);
  message$ = this.notificationService.message$;
}
