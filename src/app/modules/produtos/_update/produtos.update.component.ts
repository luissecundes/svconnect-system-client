import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseLayoutComponent } from '../../../shared/layout/base-layout/base-layout.component';
import { DynamicFormComponent } from '../../../shared/dynamic-form/dynamic-form.component';
import { SidenavBaseComponent } from '../../../core/utils/sidenav.mixin';
import { DynamicField } from '../../../core/interfaces/dynamic-field.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionButtonsComponent } from '../../../shared/action-buttons/action-buttons.component';
import { AlertMessageComponent } from '../../../shared/alert-message/alert-message.component';
import { ActionButton } from '../../../core/interfaces/action-button.interface';

@Component({
  selector: 'app-produtos.update',
  imports: [
    CommonModule,
    BaseLayoutComponent,
    DynamicFormComponent,
    ActionButtonsComponent,
    AlertMessageComponent,
  ],
  templateUrl: './produtos.update.component.html',
  styleUrl: './produtos.update.component.scss',
})
export class ProdutosUpdateComponent extends SidenavBaseComponent {
  produtoForm: FormGroup;
  alertVisible = false;
  alertMessage = '';
  alertType: 'success' | 'error' | 'info' | 'warning' = 'success';
  buttons: ActionButton[] = [];

  constructor(private fb: FormBuilder) {
    super();
    this.produtoForm = this.fb.group({
      id: [''],
      nomeProduto: [''],
      precoCusto: [0],
      precoVenda: [0],
      descricao: [''],
    });

    this.buttons = [
      {
        label: 'Cancelar',
        color: 'secondary',
        icon: 'fas fa-times-circle',
        action: () => this.onCancel(),
      },
      {
        label: 'Salvar',
        color: 'primary',
        icon: 'fas fa-save',
        disabled: this.produtoForm.invalid,
        action: () => this.onSave(),
      },
    ];
  }

  saveUrl = '/api/produtos';

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

  onCancel() {
    console.log('Produto salvo:');
  }

  onSave() {
    this.alertType = 'success';
    this.alertMessage = '';
    this.alertVisible = true;

    setTimeout(() => {
      this.alertVisible = false;
    }, 3000);
  }
}
