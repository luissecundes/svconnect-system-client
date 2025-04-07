import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { VendasDynamicTableComponent } from '../../mocks/vendas-dynamic-table/vendas-dynamic-table.component';
import { DetailDrawerComponent } from '../../shared/detail-drawer/detail-drawer.component';

@Component({
  selector: 'app-vendas',
  imports: [
    SidenavComponent,
    NavbarComponent,
    MenuComponent,
    CommonModule,
    DetailDrawerComponent,
    VendasDynamicTableComponent,
  ],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.scss',
})
export class VendasComponent extends SidenavBaseComponent {
  drawerVisible = false;
  selectedItem: any = null;

  openDetail(item: any) {
    this.selectedItem = item;
    this.drawerVisible = true;
  }

  onRowClicked(item: any) {
    const isSameItem =
      this.selectedItem && this.selectedItem.codigo === item.codigo;

    if (isSameItem) {
      this.drawerVisible = false;
      // Espera a animação terminar antes de limpar
      setTimeout(() => {
        this.selectedItem = null;
      }, 300); // tempo igual ao da animação no CSS
    } else {
      this.selectedItem = item;
      this.drawerVisible = true;
    }
  }

  closeDetail() {
    this.drawerVisible = false;
    setTimeout(() => {
      this.selectedItem = null;
    }, 300);
  }
}
