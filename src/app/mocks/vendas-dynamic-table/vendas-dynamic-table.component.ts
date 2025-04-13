import { Component, EventEmitter, Output } from '@angular/core';
import { DynamicTableComponent } from '../../shared/dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-vendas-dynamic-table',
  standalone: true,
  imports: [DynamicTableComponent],
  templateUrl: './vendas-dynamic-table.component.html',
  styleUrls: ['./vendas-dynamic-table.component.scss'],
})
export class VendasDynamicTableComponent {
  @Output() rowClicked = new EventEmitter<any>();

  columns = [
    { key: 'codigo', label: 'Código' },
    { key: 'emissao', label: 'Emissão' },
    { key: 'nomeCliente', label: 'Nome do Cliente' },
    { key: 'formaPagamento', label: 'Forma de Pagamento' },
    { key: 'vendedor', label: 'Vendedor' },
    { key: 'valorTotal', label: 'Valor Total' },
  ];

  data = Array.from({ length: 170 }).map((_, index) => ({
    codigo: this.generateCodigo(),
    emissao: this.generateDate(),
    nomeCliente: this.generateNomeCliente(),
    formaPagamento: this.getRandomPagamento(),
    vendedor: this.generateNomeVendedor(),
    valorTotal: this.generateValorTotal(),
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

  private generateNomeCliente(): string {
    const nomes = [
      'Carlos',
      'Mariana',
      'Roberto',
      'Fernanda',
      'Bruno',
      'Tatiane',
    ];
    const sobrenomes = [
      'Silva',
      'Oliveira',
      'Souza',
      'Costa',
      'Pereira',
      'Santos',
    ];
    return (
      nomes[Math.floor(Math.random() * nomes.length)] +
      ' ' +
      sobrenomes[Math.floor(Math.random() * sobrenomes.length)] +
      ' ' +
      sobrenomes[Math.floor(Math.random() * sobrenomes.length)]
    );
  }

  private getRandomPagamento(): string {
    const formas = [
      'Cheque',
      'Dinheiro',
      'Pix',
      'Cartão de Crédito',
      'Cartão de Débito',
    ];
    return formas[Math.floor(Math.random() * formas.length)];
  }

  private generateNomeVendedor(): string {
    const vendedores = [
      'Lucas Alves',
      'Ana Lima',
      'Marcelo Souza',
      'Juliana Costa',
      'Ricardo Mendes',
    ];
    return vendedores[Math.floor(Math.random() * vendedores.length)];
  }

  private generateValorTotal(): string {
    return `R$ ${(Math.random() * 5000 + 50).toFixed(2)}`;
  }

  onRowClicked(item: any) {
    this.rowClicked.emit(item);
  }
}
