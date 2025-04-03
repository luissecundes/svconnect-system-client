import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from '../../services/notification/notification.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private spinnerService = inject(NgxSpinnerService);
  private notificationService = inject(NotificationService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.show();

    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            this.spinnerService.hide();
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            this.handleHttpError(error);
          }
        },
      }),
      finalize(() => {
        this.spinnerService.hide();
      })
    );
  }

  private handleHttpError(error: HttpErrorResponse): void {
    let errorMessage = 'Ocorreu um erro inesperado.';

    switch (error.status) {
      case 400:
        errorMessage = 'Falha na requisição';
        break;
      case 401:
        errorMessage = 'Usuário não autorizado';
        break;
      case 404:
        errorMessage = 'Página não encontrada';
        break;
      case 500:
        errorMessage = 'Erro de Servidor';
        break;
    }

    this.notificationService.showMessage(errorMessage);
  }
}
