// layout.component.ts
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, SidenavComponent, CommonModule], 
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sidenavCollapsed = false;
  screenWidth = 0;

  handleSidenavToggle(event: { collapsed: boolean, screenWidth: number }): void {
    this.sidenavCollapsed = event.collapsed;
    this.screenWidth = event.screenWidth;
  }
}
