import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { DetailDrawerComponent } from '../../shared/detail-drawer/detail-drawer.component';
import { ComprasDynamicTableComponent } from '../../mocks/compras-dynamic-table/compras-dynamic-table.component';
import { DetailDrawerService } from '../../services/detail-drawer/detail-drawer.service';
import { BaseLayoutComponent } from '../../shared/layout/base-layout/base-layout.component';
import { FilterField } from '../../core/interfaces/dynamic-filter.interface';
import { DynamicFilterComponent } from '../../shared/dynamic-filter/dynamic-filter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [
    BaseLayoutComponent,
    DetailDrawerComponent,
    MenuComponent,
    CommonModule,
    ComprasDynamicTableComponent,
    DynamicFilterComponent,
  ],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.scss',
})
export class ComprasComponent extends SidenavBaseComponent {
  drawerVisible$;
  selectedItem$;
  fields: FilterField[] = [
    { label: 'Código', key: 'codigo' },
    { label: 'Data de Emissão', key: 'dataEmissao' },
    { label: 'Compra', key: 'compra' },
    { label: 'Forma de Pagamento', key: 'formaPagamento' },
    { label: 'Vendedor', key: 'vendedor' },
  ];

  constructor(
    private drawerService: DetailDrawerService,
    private router: Router
  ) {
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

  onInsertCompras() {
    this.router.navigate(['/compras/update']);
  }
}
