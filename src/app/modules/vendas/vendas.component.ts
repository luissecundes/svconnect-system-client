import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { VendasDynamicTableComponent } from '../../mocks/vendas-dynamic-table/vendas-dynamic-table.component';
import { DetailDrawerComponent } from '../../shared/detail-drawer/detail-drawer.component';
import { DetailDrawerService } from '../../services/detail-drawer/detail-drawer.service';
import { BaseLayoutComponent } from '../../shared/layout/base-layout/base-layout.component';
import { DynamicFilterComponent } from '../../shared/dynamic-filter/dynamic-filter.component';
import { FilterField } from '../../core/interfaces/dynamic-filter.interface';

@Component({
  selector: 'app-vendas',
  imports: [
    BaseLayoutComponent,
    MenuComponent,
    CommonModule,
    DetailDrawerComponent,
    VendasDynamicTableComponent,
    DynamicFilterComponent,
  ],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.scss',
})
export class VendasComponent extends SidenavBaseComponent {
  drawerVisible$;
  selectedItem$;

  fields: FilterField[] = [
    { label: 'Código', key: 'codigo' },
    { label: 'Data de Emissão', key: 'dataEmissao' },
    { label: 'Cliente', key: 'cliente' },
    { label: 'Forma de Pagamento', key: 'formaPagamento' },
    { label: 'Vendedor', key: 'vendedor' },
  ];

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

  filtrarTabela(filtros: any) {
    console.log('Filtros aplicados:', filtros);
  }
}
