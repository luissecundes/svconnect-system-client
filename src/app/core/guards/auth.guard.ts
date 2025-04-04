import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/auth/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  canActivate(): boolean {
    const token = this.storageService.getToken();

    if (!token || !this.authService.isTokenValid(token)) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
