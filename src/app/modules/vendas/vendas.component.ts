import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { VendasDynamicTableComponent } from '../../mocks/vendas-dynamic-table/vendas-dynamic-table.component';

@Component({
  selector: 'app-vendas',
  imports: [SidenavComponent, NavbarComponent, MenuComponent, CommonModule, VendasDynamicTableComponent],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.scss',
})
export class VendasComponent extends SidenavBaseComponent {}
