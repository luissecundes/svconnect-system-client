import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { EstoqueComponent } from './modules/estoque/estoque.component';
import { FinanceiroComponent } from './modules/financeiro/financeiro.component';
import { VendasComponent } from './modules/vendas/vendas.component';
import { AuthGuard } from './guards/auth.guard';

// Mapeamento de rotas para componentes
const routeComponents: { [key: string]: any } = {
  home: HomeComponent,
  clientes: ClientesComponent,
  estoque: EstoqueComponent,
  financeiro: FinanceiroComponent,
  vendas: VendasComponent,
};

// Configuração de rotas
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // Criando rotas dinamicamente a partir do objeto
  ...Object.keys(routeComponents).map((path) => ({
    path,
    component: routeComponents[path],
    // canActivate: [AuthGuard], // Protegendo todas as rotas com AuthGuard
  })),

  { path: '**', redirectTo: 'home' },
];
