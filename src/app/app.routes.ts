import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { AuthGuard } from './guards/auth.guard'; // Import do guard

// Colocar o AuthGuard em todas as rotas que precisam de autenticação
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },

  //HomeComponent
  {
    path: 'home',
    component: HomeComponent,
  },

  // ClientesComponent
  {
    path: 'clientes',
    component: ClientesComponent,
  },

  // FornecedoresComponent

  { path: '**', redirectTo: 'home' },
];
