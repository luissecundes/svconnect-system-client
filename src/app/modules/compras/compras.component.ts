import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { VendasDynamicTableComponent } from '../../mocks/vendas-dynamic-table/vendas-dynamic-table.component';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { DetailDrawerComponent } from '../../shared/detail-drawer/detail-drawer.component';
import { ComprasDynamicTableComponent } from '../../mocks/compras-dynamic-table/compras-dynamic-table.component';

@Component({
  selector: 'app-compras',
  imports: [
    SidenavComponent,
    NavbarComponent,
    DetailDrawerComponent,
    MenuComponent,
    CommonModule,
    ComprasDynamicTableComponent,
  ],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.scss',
})
export class ComprasComponent extends SidenavBaseComponent {
  drawerVisible = false;
  selectedItem: any = null;

  openDetail(item: any) {
    console.log('Registro clicado aqui:', item);
    this.selectedItem = item;
    this.drawerVisible = true;
  }

  onRowClicked(item: any) {
    console.log('método clicado:', this.openDetail(item));
    this.openDetail(item);
  }

  closeDetail() {
    this.drawerVisible = false;
  }
}
