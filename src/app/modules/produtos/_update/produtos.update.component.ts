import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseLayoutComponent } from '../../../shared/layout/base-layout/base-layout.component';
import { DynamicFormComponent } from '../../../shared/dynamic-form/dynamic-form.component';
import { SidenavBaseComponent } from '../../../core/utils/sidenav.mixin';
import { DynamicField } from '../../../core/interfaces/dynamic-field.interface';

@Component({
  selector: 'app-produtos.update',
  imports: [CommonModule, BaseLayoutComponent, DynamicFormComponent],
  templateUrl: './produtos.update.component.html',
  styleUrl: './produtos.update.component.scss',
})
export class ProdutosUpdateComponent extends SidenavBaseComponent {
  fields: DynamicField[] = [
    {
      key: 'id',
      label: 'ID',
      type: 'text',
      readonly: true,
      colSpan: 3,
    },
    {
      key: 'dataCadastro',
      label: 'Data de Cadastro',
      type: 'date',
      readonly: true,
      colSpan: 3,
    },
    {
      key: 'nomeProduto',
      label: 'Nome do Produto',
      type: 'text',
      required: true,
      colSpan: 6,
    },
    {
      key: 'codigoInterno',
      label: 'Código Interno',
      type: 'text',
      required: true,
      colSpan: 4,
    },
    {
      key: 'categoria',
      label: 'Categoria',
      type: 'select',
      required: true,
      colSpan: 4,
    },
    {
      key: 'fornecedor',
      label: 'Fornecedor',
      type: 'text',
      colSpan: 4,
    },
    {
      key: 'precoCusto',
      label: 'Preço de Custo',
      type: 'number',
      mask: 'currency',
      required: true,
      colSpan: 4,
    },
    {
      key: 'precoVenda',
      label: 'Preço de Venda',
      type: 'number',
      mask: 'currency',
      required: true,
      colSpan: 4,
    },
    {
      key: 'estoqueAtual',
      label: 'Estoque Atual',
      type: 'number',
      required: true,
      colSpan: 4,
    },
    {
      key: 'descricao',
      label: 'Descrição do Produto',
      type: 'textarea',
      colSpan: 12,
    },
  ];
}
