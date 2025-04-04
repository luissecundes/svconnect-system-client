import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpErrorHandlerService } from '../../services/exceptions/http-error-handler.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private spinnerService = inject(NgxSpinnerService);
  private errorHandler = inject(HttpErrorHandlerService);

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
          this.errorHandler.handle(error);
        },
      }),
      finalize(() => {
        this.spinnerService.hide();
      })
    );
  }
}
