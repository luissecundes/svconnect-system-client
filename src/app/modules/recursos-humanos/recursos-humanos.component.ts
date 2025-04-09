import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { BaseLayoutComponent } from '../../shared/layout/base-layout/base-layout.component';

@Component({
  selector: 'app-recursos-humanos',
  imports: [BaseLayoutComponent, MenuComponent, CommonModule],
  templateUrl: './recursos-humanos.component.html',
  styleUrl: './recursos-humanos.component.scss'
})
export class RecursosHumanosComponent extends SidenavBaseComponent {

}
