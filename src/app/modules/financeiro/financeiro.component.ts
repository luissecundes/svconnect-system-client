import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { BaseLayoutComponent } from '../../shared/layout/base-layout/base-layout.component';

@Component({
  selector: 'app-financeiro',
  imports: [BaseLayoutComponent, MenuComponent, CommonModule],
  templateUrl: './financeiro.component.html',
  styleUrl: './financeiro.component.scss'
})
export class FinanceiroComponent extends SidenavBaseComponent {

}
