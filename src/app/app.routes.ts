import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { AuthGuard } from './guards/auth.guard'; // Import do guard
import { EstoqueComponent } from './modules/estoque/estoque.component';
import { FinanceiroComponent } from './modules/financeiro/financeiro.component';
import { PcpComponent } from './modules/pcp/pcp.component';
import { RecursosHumanosComponent } from './modules/recursos-humanos/recursos-humanos.component';
import { VendasComponent } from './modules/vendas/vendas.component';

// Colocar o AuthGuard em todas as rotas quando o sistema estiver pronto
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

  // EstoqueComponent
  {
    path: 'estoque',
    component: EstoqueComponent,
  },

  // FinanceiroComponent
  {
    path: 'financeiro',
    component: FinanceiroComponent,
  },

  // PcpComponent
  {
    path: 'pcp',
    component: PcpComponent,
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
