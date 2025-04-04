import { Component } from '@angular/core';
import { ClientesDynamicTableComponent } from '../../mocks/clientes-dynamic-table/clientes-dynamic-table.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';

@Component({
  selector: 'app-clientes',
  imports: [
    ClientesDynamicTableComponent,
    SidenavComponent,
    NavbarComponent,
    MenuComponent,
    CommonModule
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss',
})
export class ClientesComponent extends SidenavBaseComponent {
}
