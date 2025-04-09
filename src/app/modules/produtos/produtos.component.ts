import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseLayoutComponent } from '../../shared/layout/base-layout/base-layout.component';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { MenuComponent } from '../../shared/menu/menu.component';
import { DetailDrawerComponent } from '../../shared/detail-drawer/detail-drawer.component';
import { ProdutosDynamicTableComponent } from '../../mocks/produtos-dynamic-table/produtos-dynamic-table.component';
import { DetailDrawerService } from '../../services/detail-drawer/detail-drawer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, BaseLayoutComponent,
      MenuComponent,
      DetailDrawerComponent,
      ProdutosDynamicTableComponent,],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent extends SidenavBaseComponent {

    drawerVisible$;
    selectedItem$;

    constructor(private drawerService: DetailDrawerService, private router: Router) {
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

  onInsertProdutos() {
    this.router.navigate(['/produtos/update']);
  }
}
