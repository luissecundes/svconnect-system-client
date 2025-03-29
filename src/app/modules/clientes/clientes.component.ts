import { Component } from '@angular/core';
import { TestDynamicTableComponent } from '../../test-dynamic-table/test-dynamic-table.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../core/components/layout/layout.component';
import { SidenavComponent } from '../../core/components/sidenav/sidenav.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { CarouselComponent } from '../../core/components/carousel/carousel.component';
import { MenuComponent } from '../../core/components/menu/menu.component';

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
export class ClientesComponent {
  sidenavCollapsed = false;

  handleSidenavToggle(event: { collapsed: boolean; screenWidth: number }) {
    this.sidenavCollapsed = event.collapsed;
  }
}
