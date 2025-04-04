import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoginResponse } from '../../core/interfaces/login-response.interface';
import { environment } from '../../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private storage = inject(StorageService);
  private apiUrl = environment.apiUrl;

  login(email: string, password: string): Observable<LoginResponse> {
    return environment.useMockAuth
      ? this.mockLogin(email)
      : this.realLogin(email, password);
  }

  logout(): void {
    this.storage.removeToken();
    console.log('Usuário deslogado. Redirecionando...');
  }

  private realLogin(
    email: string,
    password: string
  ): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { email, password });
  }

  private mockLogin(email: string): Observable<LoginResponse> {
    console.log('🚧 API desativada, retornando mock...');
    const mockResponse: LoginResponse = {
      token: 'fake-token',
      user: {
        id: 1,
        name: 'Usuário Teste',
      },
    };
    return of(mockResponse).pipe(delay(1000));
  }
}
