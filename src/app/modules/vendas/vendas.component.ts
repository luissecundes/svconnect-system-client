import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { VendasDynamicTableComponent } from '../../mocks/vendas-dynamic-table/vendas-dynamic-table.component';
import { DetailDrawerComponent } from '../../shared/detail-drawer/detail-drawer.component';
import { DetailDrawerService } from '../../services/detail-drawer/detail-drawer.service';
import { BaseLayoutComponent } from '../../shared/layout/base-layout/base-layout.component';

@Component({
  selector: 'app-vendas',
  imports: [
    BaseLayoutComponent,
    MenuComponent,
    CommonModule,
    DetailDrawerComponent,
    VendasDynamicTableComponent,
  ],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.scss',
})
export class VendasComponent extends SidenavBaseComponent {
  drawerVisible$;
  selectedItem$;

  constructor(private drawerService: DetailDrawerService) {
    super();
    this.drawerVisible$ = this.drawerService.drawerVisible$;
    this.selectedItem$ = this.drawerService.selectedItem$;
  }

  onRowClicked(item: any) {
    this.drawerService.toggle(item);
  }

  closeDetail() {
    this.drawerService.close();
  }
}

