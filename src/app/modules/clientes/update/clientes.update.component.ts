import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from '../../../shared/layout/base-layout/base-layout.component';
import { SidenavBaseComponent } from '../../../core/utils/sidenav.mixin';

@Component({
  selector: 'app-clientes.update',
  standalone: true,
  imports: [CommonModule, BaseLayoutComponent],
  templateUrl: './clientes.update.component.html',
  styleUrls: ['./clientes.update.component.scss'],
})
export class ClientesUpdateComponent extends SidenavBaseComponent {}
