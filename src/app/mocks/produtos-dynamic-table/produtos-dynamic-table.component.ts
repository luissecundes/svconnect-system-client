import { Component, EventEmitter, Output } from '@angular/core';
import { DynamicTableComponent } from '../../shared/dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-produtos-dynamic-table',
  imports: [DynamicTableComponent],
  templateUrl: './produtos-dynamic-table.component.html',
  styleUrl: './produtos-dynamic-table.component.scss',
})
export class ProdutosDynamicTableComponent {
  @Output() rowClicked = new EventEmitter<any>();

  columns = [
    { key: 'codigo', label: 'Código' },
    { key: 'emissao', label: 'Data de Cadastro' },
    { key: 'nomeProduto', label: 'Nome do Produto' },
    { key: 'categoria', label: 'Categoria' },
    { key: 'fornecedor', label: 'Fornecedor' },
    { key: 'preco', label: 'Preço' },
  ];

  data = Array.from({ length: 15 }).map((_, index) => ({
    codigo: this.generateCodigo(),
    emissao: this.generateDate(),
    nomeProduto: this.generateNomeProduto(),
    categoria: this.getRandomCategoria(),
    fornecedor: this.generateNomeFornecedor(),
    preco: this.generatePreco(),
  }));

  actions = [
    {
      icon: 'fas fa-edit',
      tooltip: 'Editar',
      action: (item: any) => this.edit(item),
    },
    {
      icon: 'fas fa-trash',
      tooltip: 'Excluir',
      action: (item: any) => this.delete(item),
    },
  ];

  onRowClicked(item: any) {
    this.rowClicked.emit(item);
  }

  onSelectionChanged(selectedItems: any[]) {
    console.log('Itens selecionados:', selectedItems);
  }

  edit(item: any) {
    console.log('Editar:', item);
  }

  delete(item: any) {
    console.log('Excluir:', item);
  }

  private generateCodigo(): string {
    return Math.floor(1000000 + Math.random() * 9000000).toString();
  }

  private generateDate(): string {
    const date = new Date(
      Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)
    );
    return date.toLocaleDateString('pt-BR');
  }

  private generateNomeProduto(): string {
    const produtos = [
      'Porta de Madeira',
      'Porta de Alumínio',
      'Fechadura Digital',
      'Batente de Madeira',
      'Dobradiça Inox',
      'Maçaneta Premium',
    ];
    return produtos[Math.floor(Math.random() * produtos.length)];
  }

  private getRandomCategoria(): string {
    const categorias = [
      'Madeira',
      'Aço',
      'Acessórios',
      'Acabamentos',
      'Ferragens',
    ];
    return categorias[Math.floor(Math.random() * categorias.length)];
  }

  private generateNomeFornecedor(): string {
    const fornecedores = [
      'Madeireira São João',
      'Portas Brasil',
      'Ferragens Silva',
      'Distribuidora Original',
      'MegaPortas Ltda',
    ];
    return fornecedores[Math.floor(Math.random() * fornecedores.length)];
  }

  private generatePreco(): string {
    return `R$ ${(Math.random() * 1500 + 100).toFixed(2)}`;
  }
}
