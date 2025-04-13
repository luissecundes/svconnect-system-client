import { Component, EventEmitter, Output } from '@angular/core';
import { DynamicTableComponent } from '../../shared/dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-clientes-dynamic-table',
  standalone: true,
  imports: [DynamicTableComponent],
  templateUrl: './clientes-dynamic-table.component.html',
  styleUrls: ['./clientes-dynamic-table.component.scss'],
})
export class ClientesDynamicTableComponent {
  @Output() rowClicked = new EventEmitter<any>();

  columns = [
    { key: 'codigo', label: 'Código' },
    { key: 'cadastro', label: 'Cadastro' },
    { key: 'nomeRazao', label: 'Nome/Razão Social' },
    { key: 'nomeFantasma', label: 'Nome Fantasma' },
    { key: 'endereco', label: 'Endereço' },
    { key: 'vendedorResponsavel', label: 'Vendedor Responsável' },
  ];

  // Gerar dados mockados dinamicamente
  data = Array.from({ length: 150 }).map((_, index) => ({
    codigo: `C00${index + 1}`,
    cadastro: this.generateDate(),
    nomeRazao: this.generateNomeRazao(),
    nomeFantasma: this.generateNomeFantasma(),
    endereco: this.generateEndereco(),
    vendedorResponsavel: this.generateVendedorResponsavel(),
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

  private generateDate(): string {
    const date = new Date(
      Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)
    );
    return date.toLocaleDateString('pt-BR');
  }

  private generateNomeRazao(): string {
    const nomes = [
      'John Doe Ltda',
      'Empresa X',
      'Acme S.A.',
      'Tech Solutions',
      'Construções ABC',
    ];
    return nomes[Math.floor(Math.random() * nomes.length)];
  }

  private generateNomeFantasma(): string {
    const nomes = ['J. Doe', 'X Corp', 'Acme', 'TechSol', 'ABC Construções'];
    return nomes[Math.floor(Math.random() * nomes.length)];
  }

  private generateEndereco(): string {
    const enderecos = [
      'Rua Albélio Fontes, 123',
      'Av. Cisne Haroldo, 456',
      'Rua Charlie Garcia, 789',
      'Av. Delmar Barbosa, 1011',
      'Rua Emanuel Pinto, 1213',
    ];
    return enderecos[Math.floor(Math.random() * enderecos.length)];
  }

  private generateVendedorResponsavel(): string {
    const vendedores = [
      'Ana Carolina', 'Andressa Souza', 'Luis Henrique', 'Marcos Silva', 'Fernanda Oliveira', 'Lucas Alves',
    ];
    return vendedores[Math.floor(Math.random() * vendedores.length)];
  }
}
