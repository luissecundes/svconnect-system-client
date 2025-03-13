import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

    // generic 404
    { path: "**", redirectTo: "home" },
];
