import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from '../../../shared/layout/base-layout/base-layout.component';
import { SidenavBaseComponent } from '../../../core/utils/sidenav.mixin';
import { DynamicFormComponent } from '../../../shared/dynamic-form/dynamic-form.component';
import { DynamicField } from '../../../core/interfaces/dynamic-field.interface';
import { AlertMessageComponent } from '../../../shared/alert-message/alert-message.component';
import { ActionButtonsComponent } from '../../../shared/action-buttons/action-buttons.component';
import { ActionButton } from '../../../core/interfaces/action-button.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes.update',
  standalone: true,
  imports: [
    CommonModule,
    BaseLayoutComponent,
    DynamicFormComponent,
    AlertMessageComponent,
    ActionButtonsComponent,
  ],
  templateUrl: './clientes.update.component.html',
  styleUrls: ['./clientes.update.component.scss'],
})
export class ClientesUpdateComponent extends SidenavBaseComponent {
  @ViewChild(AlertMessageComponent) alert!: AlertMessageComponent;
  clientesForm: FormGroup;
  buttons: ActionButton[] = [];

  constructor(private fb: FormBuilder) {
    super();
    this.clientesForm = this.fb.group({
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
        disabled: this.clientesForm.invalid,
        action: () => this.onSave(),
      },
    ];
  }

  fields: DynamicField[] = [
    { key: 'id', label: 'ID', type: 'text', readonly: true, colSpan: 3 },
    {
      key: 'dataCadastro',
      label: 'Data de Cadastro',
      type: 'date',
      readonly: true,
      colSpan: 3,
    },
    {
      key: 'nome',
      label: 'Nome Completo',
      type: 'text',
      required: true,
      colSpan: 6,
    },
    {
      key: 'cpf',
      label: 'CPF ou CNPJ',
      type: 'text',
      mask: 'cpfCnpj',
      colSpan: 4,
    },
    {
      key: 'email',
      label: 'E-mail',
      type: 'email',
      colSpan: 4,
    },
    {
      key: 'telefone',
      label: 'Telefone',
      type: 'text',
      mask: 'telefone',
      colSpan: 4,
    },
    {
      key: 'endereco',
      label: 'Endereço',
      type: 'text',
      colSpan: 12,
    },
    {
      key: 'cidade',
      label: 'Cidade',
      type: 'text',
      colSpan: 4,
    },
    {
      key: 'estado',
      label: 'Estado',
      type: 'text',
      colSpan: 4,
    },
    {
      key: 'limiteCredito',
      label: 'Limite de Crédito',
      type: 'number',
      mask: 'currency',
      colSpan: 4,
    },
  ];

  onCancel() {
    console.log('Botão de cancelador clicado:');
  }

  onSave() {
    this.alert.show({
      type: 'success',
      message: '',
    });
  }
}
