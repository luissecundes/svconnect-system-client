import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { SidenavComponent } from '../../core/components/sidenav/sidenav.component';
import { MenuComponent } from '../../core/components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';

@Component({
  selector: 'app-pcp',
  imports: [NavbarComponent, SidenavComponent, MenuComponent, CommonModule],
  templateUrl: './pcp.component.html',
  styleUrl: './pcp.component.scss',
})
export class PcpComponent extends SidenavBaseComponent {}
