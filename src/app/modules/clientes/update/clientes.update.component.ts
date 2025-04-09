import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from '../../../shared/layout/base-layout/base-layout.component';
import { SidenavBaseComponent } from '../../../core/utils/sidenav.mixin';
import { DynamicFormComponent } from '../../../shared/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-clientes.update',
  standalone: true,
  imports: [CommonModule, BaseLayoutComponent, DynamicFormComponent],
  templateUrl: './clientes.update.component.html',
  styleUrls: ['./clientes.update.component.scss'],
})
export class ClientesUpdateComponent extends SidenavBaseComponent {
  fields = [
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
      label: 'CPF',
      type: 'text',
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
      isCurrency: true,
      colSpan: 4,
    },
  ];
}
