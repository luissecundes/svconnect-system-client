import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidenavBaseComponent } from '../../../core/utils/sidenav.mixin';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [CommonModule, SidenavComponent, NavbarComponent],
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent extends SidenavBaseComponent {}
