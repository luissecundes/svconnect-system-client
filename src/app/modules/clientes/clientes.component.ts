import { Component } from '@angular/core';
import { TestDynamicTableComponent } from '../../test-dynamic-table/test-dynamic-table.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../core/components/sidenav/sidenav.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { MenuComponent } from '../../core/components/menu/menu.component';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';

@Component({
  selector: 'app-clientes',
  imports: [
    TestDynamicTableComponent,
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
