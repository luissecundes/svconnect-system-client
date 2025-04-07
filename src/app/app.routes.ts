import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { AuthGuard } from './core/guards/auth.guard'; // Import do guard (NÃO ESQUECER)
import { EstoqueComponent } from './modules/estoque/estoque.component';
import { FinanceiroComponent } from './modules/financeiro/financeiro.component';
import { PcpComponent } from './modules/pcp/pcp.component';
import { RecursosHumanosComponent } from './modules/recursos-humanos/recursos-humanos.component';
import { VendasComponent } from './modules/vendas/vendas.component';
import { LoadingGuard } from './core/guards/loading.guard';
import { ComprasComponent } from './modules/compras/compras.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoadingGuard],
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  {
    path: 'estoque',
    component: EstoqueComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  {
    path: 'financeiro',
    component: FinanceiroComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  {
    path: 'pcp',
    component: PcpComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  {
    path: 'recursos-humanos',
    component: RecursosHumanosComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  {
    path: 'vendas',
    component: VendasComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  {
    path: 'compras',
    component: ComprasComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  { path: '**', redirectTo: 'home' },
];
