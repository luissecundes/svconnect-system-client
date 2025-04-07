import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { VendasDynamicTableComponent } from '../../mocks/vendas-dynamic-table/vendas-dynamic-table.component';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { DetailDrawerComponent } from '../../shared/details-dynamic/detail-drawer.component';

@Component({
  selector: 'app-compras',
  imports: [
    SidenavComponent,
    NavbarComponent,
    DetailDrawerComponent,
    MenuComponent,
    CommonModule,
    VendasDynamicTableComponent,
  ],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.scss',
})
export class ComprasComponent extends SidenavBaseComponent {
  drawerVisible = false;
  selectedItem: any = null;

  openDetail(item: any) {
    this.selectedItem = item;
    this.drawerVisible = true;
  }

  closeDetail() {
    this.drawerVisible = false;
  }
}
