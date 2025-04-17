import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { BaseLayoutComponent } from '../../../shared/layout/base-layout/base-layout.component';
import { DynamicFormComponent } from '../../../shared/dynamic-form/dynamic-form.component';
import { SidenavBaseComponent } from '../../../core/utils/sidenav.mixin';
import { DynamicField } from '../../../core/interfaces/dynamic-field.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionButtonsComponent } from '../../../shared/action-buttons/action-buttons.component';
import { ActionButton } from '../../../core/interfaces/action-button.interface';
import { AlertService } from '../../../services/alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos.update',
  imports: [
    CommonModule,
    BaseLayoutComponent,
    DynamicFormComponent,
    ActionButtonsComponent,
  ],
  templateUrl: './produtos.update.component.html',
  styleUrl: './produtos.update.component.scss',
})
export class ProdutosUpdateComponent extends SidenavBaseComponent {
  produtoForm: FormGroup;
  buttons: ActionButton[] = [];

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private router: Router
  ) {
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
        label: 'Salvar',
        color: 'primary',
        icon: 'fas fa-save',
        disabled: this.produtoForm.invalid,
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

  saveUrl = '/api/produtos';

  fields: DynamicField[] = [
    {
      key: 'id',
      label: 'ID',
      type: 'text',
      readonly: true,
      colSpan: 1,
    },
    {
      key: 'dataCadastro',
      label: 'Data de Cadastro',
      type: 'date',
      readonly: true,
      colSpan: 1,
    },
    {
      key: 'descricao',
      label: 'Descrição do Produto',
      type: 'textarea',
      colSpan: 4,
    },
    {
      key: 'tipoProduto',
      label: 'Tipo de Produto',
      type: 'select',
      options: [
        { label: 'Tipo 1', value: 'tipo1' },
        { label: 'Tipo 2', value: 'tipo2' },
        { label: 'Tipo 3', value: 'tipo3' },
      ],
      colSpan: 3,
    },
  ];

  onCancel() {
    this.router.navigate(['/produtos']);
  }

  onSave() {
    this.alertService.showAlert({
      type: 'success',
      message: 'Produto salvo com sucesso!',
    });
  }
}
