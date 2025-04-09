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
    { key: 'id', label: 'ID', type: 'text', readonly: true, colSpan: 1 },
    {
      key: 'dataCadastro',
      label: 'Data de Cadastro',
      type: 'date',
      readonly: true,
      colSpan: 1,
    },
    {
      key: 'nome',
      label: 'Nome Completo/Razão Social',
      type: 'text',
      required: true,
      colSpan: 5,
    },
    {
      key: 'nomeFantasia',
      label: 'Nome Fantasia',
      type: 'text',
      colSpan: 5,
    },
    { key: 'cpf', label: 'CPF', type: 'text', colSpan: 2 },
    { key: 'cnpj', label: 'CNPJ', type: 'text', required: true, colSpan: 2 },
    { key: 'rg', label: 'RG', type: 'text', colSpan: 2 },
    {
      key: 'inscricaoEstadual',
      label: 'Inscrição Estadual',
      type: 'text',
      required: true,
      colSpan: 2,
    },
    {
      key: 'inscricaoMunicipal',
      label: 'Inscrição Municipal',
      type: 'text',
      colSpan: 2,
    },
    { key: 'cep', label: 'CEP', type: 'text', required: true, colSpan: 2 },
    {
      key: 'endereco',
      label: 'Endereço',
      type: 'text',
      required: true,
      colSpan: 4,
    },
    {
      key: 'bairro',
      label: 'Bairro',
      type: 'text',
      required: true,
      colSpan: 4,
    },
    { key: 'complemento', label: 'Complemento', type: 'text', colSpan: 4 },
    { key: 'ibgeCidade', label: 'IBGE Cidade*', type: 'text', colSpan: 2 },
    { key: 'cidade', label: 'Cidade*', type: 'text', colSpan: 2 },
    { key: 'ibgePais', label: 'IBGE País*', type: 'text', colSpan: 2 },
    { key: 'email', label: 'E-mail*', type: 'email', colSpan: 3 },
    { key: 'telefone', label: 'Telefone*', type: 'text', colSpan: 3 },
  ];
}
