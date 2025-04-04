import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification/notification.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);
  message$ = this.notificationService.message$;
  show = false;
  hide = false;

  constructor() {
    this.message$.subscribe((message) => {
      if (message) {
        this.show = true;
        this.hide = false;

        timer(4000).subscribe(() => {
          this.hide = true;

          timer(500).subscribe(() => {
            this.show = false;
          });
        });
      }
    });
  }
}
