import { Component } from '@angular/core';
import { TestDynamicTableComponent } from '../../test-dynamic-table/test-dynamic-table.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../core/components/layout/layout.component';

@Component({
  selector: 'app-clientes',
  imports: [
    TestDynamicTableComponent,
    LayoutComponent,
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
