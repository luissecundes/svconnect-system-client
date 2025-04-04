import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private storage = inject(StorageService);
  private apiUrl = environment.apiUrl;
  private router = inject(Router);

  login(email: string, password: string): Observable<string> {
    return this.http
      .post<{ data: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(map((res) => res.data));
  }

  logout(): void {
    this.storage.removeToken();
    this.router.navigate(['/login']);
    console.log('Usuário deslogado.');
  }

  isTokenValid(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp * 1000;
      return Date.now() < exp;
    } catch (e) {
      return false;
    }
  }
}
