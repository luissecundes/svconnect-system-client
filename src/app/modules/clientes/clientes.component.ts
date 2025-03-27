import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { MenuComponent } from '../../core/components/menu/menu.component';
import { TestDynamicTableComponent } from '../../test-dynamic-table/test-dynamic-table.component';
import { SidenavComponent } from '../../core/components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [
    NavbarComponent,
    MenuComponent,
    TestDynamicTableComponent,
    SidenavComponent,
    CommonModule
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss',
})
export class ClientesComponent {
  sidenavCollapsed = false;

  handleSidenavToggle(event: { collapsed: boolean; screenWidth: number }) {
    this.sidenavCollapsed = event.collapsed;
  }
}
