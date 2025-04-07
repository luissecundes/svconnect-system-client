import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { DetailDrawerComponent } from '../../shared/detail-drawer/detail-drawer.component';
import { ComprasDynamicTableComponent } from '../../mocks/compras-dynamic-table/compras-dynamic-table.component';
import { DetailDrawerService } from '../../services/detail-drawer/detail-drawer.service';

@Component({
  selector: 'app-compras',
  standalone: true,
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
  drawerVisible$
  selectedItem$

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
