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
  selector: 'app-compras.update',
  imports: [
    CommonModule,
    BaseLayoutComponent,
    DynamicFormComponent,
    ActionButtonsComponent,
  ],
  templateUrl: './compras.update.component.html',
  styleUrl: './compras.update.component.scss',
})
export class ComprasUpdateComponent extends SidenavBaseComponent {
  compraForm: FormGroup;
  buttons: ActionButton[] = [];

  constructor(private fb: FormBuilder, private alertService: AlertService, private router: Router) {
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
    ];
  }

  saveUrl = '/api/compras';

  fields: DynamicField[] = [
    {
      key: 'id',
      label: 'Label de Compras',
      type: 'text',
      readonly: true,
      colSpan: 3,
    },
    {
      key: 'dataCadastro',
      label: 'Label de Compras',
      type: 'date',
      readonly: true,
      colSpan: 3,
    },
    {
      key: 'nomeCompra',
      label: 'Label de Compras',
      type: 'text',
      required: true,
      colSpan: 6,
    },
    {
      key: 'codigoInterno',
      label: 'Label de Compras',
      type: 'text',
      required: true,
      colSpan: 4,
    },
    {
      key: 'categoria',
      label: 'Label de Compras',
      type: 'select',
      required: true,
      colSpan: 4,
    },
    {
      key: 'fornecedor',
      label: 'Label de Compras',
      type: 'text',
      colSpan: 4,
    },
    {
      key: 'precoCusto',
      label: 'Label de Compras',
      type: 'number',
      mask: 'currency',
      required: true,
      colSpan: 4,
    },
    {
      key: 'precoVenda',
      label: 'Label de Compras',
      type: 'number',
      mask: 'currency',
      required: true,
      colSpan: 4,
    },
    {
      key: 'estoqueAtual',
      label: 'Label de Compras',
      type: 'number',
      required: true,
      colSpan: 4,
    },
    {
      key: 'descricao',
      label: 'Label de Compras',
      type: 'textarea',
      colSpan: 12,
    },
  ];

  onCancel() {
    this.router.navigate(['/compras']);
  }

  onSave() {
    this.alertService.showAlert({
      type: 'success',
      message: 'Compra salva com sucesso!',
    });
  }
}
