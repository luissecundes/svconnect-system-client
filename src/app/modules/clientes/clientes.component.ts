import { Component } from '@angular/core';
import { TestDynamicTableComponent } from '../../shared/test-dynamic-table/test-dynamic-table.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
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
