import { Component } from '@angular/core';
import { SidenavComponent } from '../../core/components/sidenav/sidenav.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { MenuComponent } from '../../core/components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';

@Component({
  selector: 'app-financeiro',
  imports: [SidenavComponent, NavbarComponent, MenuComponent, CommonModule],
  templateUrl: './financeiro.component.html',
  styleUrl: './financeiro.component.scss'
})
export class FinanceiroComponent extends SidenavBaseComponent {

}
