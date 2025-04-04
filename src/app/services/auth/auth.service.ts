import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoginResponse } from '../../core/interfaces/login-response.interface';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private storage = inject(StorageService);
  private apiUrl = environment.apiUrl;
  private router = inject(Router);

  login(email: string, password: string): Observable<LoginResponse> {
    return environment.useMockAuth
      ? this.mockLogin(email)
      : this.realLogin(email, password);
  }

  logout(): void {
    this.storage.removeToken();
    this.router.navigate(['/login']);
    console.log('Usuário deslogado.');
  }

  private realLogin(
    email: string,
    password: string
  ): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { email, password });
  }

  isTokenValid(token: string): boolean {
    if (environment.useMockAuth) {
      return !!token;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp * 1000;
      return Date.now() < exp;
    } catch (e) {
      return false;
    }
  }

  private mockLogin(email: string): Observable<LoginResponse> {
    console.log('API desativada, retornando mock...');
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
