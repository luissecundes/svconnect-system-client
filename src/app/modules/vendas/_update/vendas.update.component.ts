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
import { AlertService } from '../../../services/alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendas.update',
  imports: [
    CommonModule,
    BaseLayoutComponent,
    DynamicFormComponent,
    ActionButtonsComponent,
  ],
  templateUrl: './vendas.update.component.html',
  styleUrl: './vendas.update.component.scss',
})
export class VendasUpdateComponent extends SidenavBaseComponent {
  vendasForm: FormGroup;
  buttons: ActionButton[] = [];

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private router: Router
  ) {
    super();
    this.vendasForm = this.fb.group({
      id: [''],
      nomeVenda: [''],
      precoCusto: [0],
      precoVenda: [0],
      descricao: [''],
    });

    this.buttons = [
      {
        label: 'Salvar',
        color: 'primary',
        icon: 'fas fa-save',
        disabled: this.vendasForm.invalid,
        action: () => this.onSave(),
      },
      {
        label: 'Cancelar',
        color: 'secondary',
        icon: 'fas fa-times-circle',
        action: () => this.onCancel(),
      },
    ];
  }

  saveUrl = '/api/vendas';

  fields: DynamicField[] = [
    {
      key: 'id',
      label: 'Label de Vendas',
      type: 'text',
      readonly: true,
      colSpan: 3,
    },
    {
      key: 'dataCadastro',
      label: 'Label de Vendas',
      type: 'date',
      readonly: true,
      colSpan: 3,
    },
    {
      key: 'nomeVenda',
      label: 'Label de Vendas',
      type: 'text',
      required: true,
      colSpan: 6,
    },
    {
      key: 'codigoInterno',
      label: 'Label de Vendas',
      type: 'text',
      required: true,
      colSpan: 4,
    },
    {
      key: 'categoria',
      label: 'Label de Vendas',
      type: 'select',
      required: true,
      colSpan: 4,
    },
    {
      key: 'fornecedor',
      label: 'Label de Vendas',
      type: 'text',
      colSpan: 4,
    },
    {
      key: 'precoCusto',
      label: 'Label de Vendas',
      type: 'number',
      mask: 'currency',
      required: true,
      colSpan: 4,
    },
    {
      key: 'precoVenda',
      label: 'Label de Vendas',
      type: 'number',
      mask: 'currency',
      required: true,
      colSpan: 4,
    },
    {
      key: 'estoqueAtual',
      label: 'Label de Vendas',
      type: 'number',
      required: true,
      colSpan: 4,
    },
    {
      key: 'descricao',
      label: 'Label de Vendas',
      type: 'textarea',
      colSpan: 12,
    },
  ];

  onCancel() {
    this.router.navigate(['/vendas']);
  }

  onSave() {
    this.alertService.showAlert({
      type: 'success',
      message: 'Venda salva com sucesso!',
    });
  }
}
