import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../notification/notification.service';
import { HttpException } from '../../core/exceptions/http-exception';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerService {
  constructor(private notificationService: NotificationService) {}

  handle(error: HttpErrorResponse): void {
    const httpException = HttpException.fromHttpErrorResponse(error);
    this.notificationService.showMessage(httpException.message);
  }
}
