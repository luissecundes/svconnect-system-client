import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';

@Component({
  selector: 'app-estoque',
  imports: [SidenavComponent, NavbarComponent, MenuComponent, CommonModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss',
})
export class EstoqueComponent extends SidenavBaseComponent{
}
