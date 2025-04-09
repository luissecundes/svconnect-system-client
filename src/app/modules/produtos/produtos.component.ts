import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { ProdutosService } from '../../services/produtos/produtos.service';
import { DynamicTableComponent } from '../../shared/dynamic-table/dynamic-table.component';
import { DetailDrawerComponent } from '../../shared/detail-drawer/detail-drawer.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { BaseLayoutComponent } from '../../shared/layout/base-layout/base-layout.component';
import { DetailDrawerService } from '../../services/detail-drawer/detail-drawer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule,
    BaseLayoutComponent,
    MenuComponent,
    DetailDrawerComponent,
    DynamicTableComponent,
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent extends SidenavBaseComponent implements OnInit {
  drawerVisible$;
  selectedItem$;

  produtos: any[] = [];
  columns = [
    { key: 'id', label: 'ID', width: '25px' },
    { key: 'skuCode', label: 'SKU', width: '80px' },
    { key: 'name', label: 'Nome', width: '200px' },
    { key: 'productType', label: 'Tipo', width: '150px' },
    { key: 'unitOfMeasure', label: 'Unidade', width: '60px' },
    { key: 'productStatus', label: 'Status', width: '30px' },
  ];

  constructor(
    private produtosService: ProdutosService,
    private drawerService: DetailDrawerService,
    private router: Router
  ) {
    super();
    this.drawerVisible$ = this.drawerService.drawerVisible$;
    this.selectedItem$ = this.drawerService.selectedItem$;
  }

  ngOnInit() {
    this.produtosService.getProdutos().subscribe({
      next: (response) => {
        this.produtos = response.data.content.map((produto: any) => ({
          ...produto,
          productType: produto.productType?.name || '',
          unitOfMeasure: produto.unitOfMeasure?.description || '',
          productStatus: produto.productStatus?.description || '',
        }));
        console.log('Produtos:', this.produtos);
      },
      error: (err) => {
        console.error('Erro ao buscar produtos:', err);
      },
    });
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
