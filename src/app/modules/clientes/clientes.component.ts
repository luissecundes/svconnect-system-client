import { Component } from '@angular/core';
import { ClientesDynamicTableComponent } from '../../mocks/clientes-dynamic-table/clientes-dynamic-table.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { Router } from '@angular/router';
import { BaseLayoutComponent } from '../../shared/layout/base-layout/base-layout.component';
import { FilterField } from '../../core/interfaces/dynamic-filter.interface';
import { DynamicFilterComponent } from '../../shared/dynamic-filter/dynamic-filter.component';

@Component({
  selector: 'app-clientes',
  imports: [
    ClientesDynamicTableComponent,
    BaseLayoutComponent,
    MenuComponent,
    CommonModule,
    DynamicFilterComponent,
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss',
})
export class ClientesComponent extends SidenavBaseComponent {
  fields: FilterField[] = [
    { label: 'Código', key: 'codigo' },
    { label: 'Data de Emissão', key: 'dataEmissao' },
    { label: 'Cliente', key: 'cliente' },
    { label: 'Forma de Pagamento', key: 'formaPagamento' },
    { label: 'Vendedor', key: 'vendedor' },
  ];

  constructor(private router: Router) {
    super();
  }
  onInsertCliente() {
    this.router.navigate(['/clientes/update']);
  }
}
