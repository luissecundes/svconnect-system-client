import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { AuthGuard } from './guards/auth.guard'; // Import do guard (NÃO ESQUECER)
import { EstoqueComponent } from './modules/estoque/estoque.component';
import { FinanceiroComponent } from './modules/financeiro/financeiro.component';
import { PcpComponent } from './modules/pcp/pcp.component';
import { RecursosHumanosComponent } from './modules/recursos-humanos/recursos-humanos.component';
import { VendasComponent } from './modules/vendas/vendas.component';
import { LoadingGuard } from './guards/loading.guard';

// Colocar o AuthGuard em todas as rotas quando o sistema estiver pronto
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoadingGuard],
  },

  //HomeComponent
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoadingGuard],
  },

  // ClientesComponent
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [LoadingGuard],
  },

  // EstoqueComponent
  {
    path: 'estoque',
    component: EstoqueComponent,
    canActivate: [LoadingGuard],
  },

  // FinanceiroComponent
  {
    path: 'financeiro',
    component: FinanceiroComponent,
    canActivate: [LoadingGuard],
  },

  // PcpComponent
  {
    path: 'pcp',
    component: PcpComponent,
    canActivate: [LoadingGuard],
  },

  // RecursosHumanosComponent
  {
    path: 'recursos-humanos',
    component: RecursosHumanosComponent,
  },

  // VendasComponent
  {
    path: 'vendas',
    component: VendasComponent,
  },

  { path: '**', redirectTo: 'home' },
];
