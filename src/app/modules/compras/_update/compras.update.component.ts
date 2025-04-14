import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { BaseLayoutComponent } from '../../../shared/layout/base-layout/base-layout.component';
import { DynamicFormComponent } from '../../../shared/dynamic-form/dynamic-form.component';
import { SidenavBaseComponent } from '../../../core/utils/sidenav.mixin';
import { DynamicField } from '../../../core/interfaces/dynamic-field.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionButtonsComponent } from '../../../shared/action-buttons/action-buttons.component';
import { AlertMessageComponent } from '../../../shared/alert-message/alert-message.component';
import { ActionButton } from '../../../core/interfaces/action-button.interface';

@Component({
  selector: 'app-compras.update',
  imports: [
    CommonModule,
    BaseLayoutComponent,
    DynamicFormComponent,
    ActionButtonsComponent,
    AlertMessageComponent,
  ],
  templateUrl: './compras.update.component.html',
  styleUrl: './compras.update.component.scss',
})
export class ComprasUpdateComponent extends SidenavBaseComponent {
  @ViewChild(AlertMessageComponent) alert!: AlertMessageComponent;
  compraForm: FormGroup;
  buttons: ActionButton[] = [];

  constructor(private fb: FormBuilder) {
    super();
    this.compraForm = this.fb.group({
      id: [''],
      nomeCompra: [''],
      precoCusto: [0],
      precoVenda: [0],
      descricao: [''],
    });

    this.buttons = [
      {
        label: 'Salvar',
        color: 'primary',
        icon: 'fas fa-save',
        disabled: this.compraForm.invalid,
        action: () => this.onSave(),
      },
      {
        label: 'Cancelar',
        color: 'secondary',
        icon: 'fas fa-times-circle',
        action: () => this.onCancel(),
      },
      {
        label: 'Excluir',
        color: 'danger',
        icon: 'fas fa-trash',
        disabled: this.compraForm.invalid,
        action: () => this.onDelete(),
      },
    ];
  }

  saveUrl = '/api/compras';

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
      key: 'nomeCompra',
      label: 'Label para Compra',
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
      label: 'Descrição da Venda',
      type: 'textarea',
      colSpan: 12,
    },
  ];

  onCancel() {
    console.log('Compra salva: ');
  }

  onSave() {
    this.alert.show({
      type: 'success',
      message: 'Compra salva com sucesso!',
    });
  }

  onDelete() {
    this.alert.show({
      type: 'success',
      message: 'Compra excluída com sucesso!',
    });
  }
}
