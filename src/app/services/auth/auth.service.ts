import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../core/interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://45.224.160.128:8088/auth/login';

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { email, password });
  }

  logout(): void {
    localStorage.removeItem('token');
    console.log('Usuário deslogado. Redirecionando...');
  }
}
