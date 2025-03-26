import { Component } from '@angular/core';
import { DynamicTableComponent } from '../core/components/dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-test-dynamic-table',
  imports: [DynamicTableComponent],
  templateUrl: './test-dynamic-table.component.html',
  styleUrls: ['./test-dynamic-table.component.scss'],
})
export class TestDynamicTableComponent {
  columns = [
    { key: 'codigo', label: 'Código' },
    { key: 'cadastro', label: 'Cadastro' },
    { key: 'nomeRazao', label: 'Nome/Razão Social' },
    { key: 'nomeFantasma', label: 'Nome Fantasma' },
    { key: 'endereco', label: 'Endereço' },
    { key: 'vendedorResponsavel', label: 'Vendedor Responsável' },
  ];

  data = [
    {
      id: 1,
      codigo: 'C001',
      cadastro: '2023-01-15',
      nomeRazao: 'John Doe Ltda',
      nomeFantasma: 'J. Doe',
      endereco: 'Rua A, 123',
      vendedorResponsavel: 'Vendedor 1',
    },
    {
      id: 2,
      codigo: 'C002',
      cadastro: '2023-02-20',
      nomeRazao: 'Empresa X',
      nomeFantasma: 'X Corp',
      endereco: 'Av. B, 456',
      vendedorResponsavel: 'Vendedor 2',
    },
    {
      id: 3,
      codigo: 'C003',
      cadastro: '2023-03-10',
      nomeRazao: 'Acme S.A.',
      nomeFantasma: 'Acme',
      endereco: 'Rua C, 789',
      vendedorResponsavel: 'Vendedor 3',
    },
    {
      id: 4,
      codigo: 'C004',
      cadastro: '2023-04-05',
      nomeRazao: 'Tech Solutions',
      nomeFantasma: 'TechSol',
      endereco: 'Av. D, 1011',
      vendedorResponsavel: 'Vendedor 1',
    },
    {
      id: 5,
      codigo: 'C005',
      cadastro: '2023-05-10',
      nomeRazao: 'Construções ABC',
      nomeFantasma: 'ABC Construções',
      endereco: 'Rua E, 1213',
      vendedorResponsavel: 'Vendedor 2',
    },
    {
      id: 6,
      codigo: 'C006',
      cadastro: '2023-06-01',
      nomeRazao: 'Supermercado XYZ',
      nomeFantasma: 'XYZ',
      endereco: 'Av. F, 1415',
      vendedorResponsavel: 'Vendedor 3',
    },
    {
      id: 7,
      codigo: 'C007',
      cadastro: '2023-07-12',
      nomeRazao: 'Loja 123',
      nomeFantasma: 'Loja123',
      endereco: 'Rua G, 1617',
      vendedorResponsavel: 'Vendedor 1',
    },
    {
      id: 8,
      codigo: 'C008',
      cadastro: '2023-08-20',
      nomeRazao: 'Mega Store',
      nomeFantasma: 'Mega',
      endereco: 'Av. H, 1819',
      vendedorResponsavel: 'Vendedor 2',
    },
    {
      id: 9,
      codigo: 'C009',
      cadastro: '2023-09-15',
      nomeRazao: 'Fashion Co.',
      nomeFantasma: 'Fashion',
      endereco: 'Rua I, 2021',
      vendedorResponsavel: 'Vendedor 3',
    },
    {
      id: 10,
      codigo: 'C010',
      cadastro: '2023-10-30',
      nomeRazao: 'Auto Parts Ltda',
      nomeFantasma: 'AutoParts',
      endereco: 'Av. J, 2223',
      vendedorResponsavel: 'Vendedor 1',
    },
    {
      id: 11,
      codigo: 'C011',
      cadastro: '2023-11-05',
      nomeRazao: 'Housewares S.A.',
      nomeFantasma: 'Housewares',
      endereco: 'Rua K, 2425',
      vendedorResponsavel: 'Vendedor 2',
    },
    {
      id: 12,
      codigo: 'C012',
      cadastro: '2023-12-01',
      nomeRazao: 'Pet Shop Pets',
      nomeFantasma: 'Pets',
      endereco: 'Av. L, 2627',
      vendedorResponsavel: 'Vendedor 3',
    },
    {
      id: 13,
      codigo: 'C013',
      cadastro: '2024-01-15',
      nomeRazao: 'Medicina Integrada',
      nomeFantasma: 'Medicina',
      endereco: 'Rua M, 2829',
      vendedorResponsavel: 'Vendedor 1',
    },
    {
      id: 14,
      codigo: 'C014',
      cadastro: '2024-02-20',
      nomeRazao: 'Bikes&Co',
      nomeFantasma: 'Bikes',
      endereco: 'Av. N, 3031',
      vendedorResponsavel: 'Vendedor 2',
    },
    {
      id: 15,
      codigo: 'C015',
      cadastro: '2024-03-10',
      nomeRazao: 'Comércio X',
      nomeFantasma: 'Comércio',
      endereco: 'Rua O, 3233',
      vendedorResponsavel: 'Vendedor 3',
    },
  ];

  actions = [
    {
      icon: 'fas fa-edit',
      tooltip: 'Edit',
      action: (item: any) => this.edit(item),
    },
    {
      icon: 'fas fa-trash',
      tooltip: 'Delete',
      action: (item: any) => this.delete(item),
    },
  ];

  // Método para lidar com a seleção
  onSelectionChanged(selectedItems: any[]) {
    console.log('Selected items:', selectedItems);
  }

  // Ações de exemplo
  edit(item: any) {
    console.log('Edit:', item);
  }

  delete(item: any) {
    console.log('Delete:', item);
  }
}
