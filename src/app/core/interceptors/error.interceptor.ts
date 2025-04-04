import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpErrorHandlerService } from '../../services/exceptions/http-error-handler.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private errorHandler = inject(HttpErrorHandlerService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorHandler.handle(error);
        return throwError(() => error);
      })
    );
  }
}
