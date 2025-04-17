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
import { ClientesUpdateComponent } from './modules/clientes/_update/clientes.update.component';
import { ProdutosComponent } from './modules/produtos/produtos.component';
import { ProdutosUpdateComponent } from './modules/produtos/_update/produtos.update.component';
import { VendasUpdateComponent } from './modules/vendas/_update/vendas.update.component';
import { ComprasUpdateComponent } from './modules/compras/_update/compras.update.component';

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

  // Clientes
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },
  {
    path: 'clientes/update',
    component: ClientesUpdateComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },
  {
    path: 'clientes/update/:id',
    component: ClientesUpdateComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  // Estoque
  {
    path: 'estoque',
    component: EstoqueComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  // Produtos
  {
    path: 'produtos',
    component: ProdutosComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },
  {
    path: 'produtos/update',
    component: ProdutosUpdateComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },
  {
    path: 'produtos/update/:id',
    component: ProdutosUpdateComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  // Financeiro
  {
    path: 'financeiro',
    component: FinanceiroComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  // PCP
  {
    path: 'pcp',
    component: PcpComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  // Recursos Humanos
  {
    path: 'recursos-humanos',
    component: RecursosHumanosComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  // Vendas
  {
    path: 'vendas',
    component: VendasComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },
  {
    path: 'vendas/update',
    component: VendasUpdateComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },
  {
    path: 'vendas/update/:id',
    component: VendasUpdateComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  // Compras
  {
    path: 'compras',
    component: ComprasComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },
  {
    path: 'compras/update',
    component: ComprasUpdateComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },
  {
    path: 'compras/update/:id',
    component: ComprasUpdateComponent,
    canActivate: [AuthGuard, LoadingGuard],
  },

  { path: '**', redirectTo: 'home' },
  
];
