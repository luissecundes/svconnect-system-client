import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { Router, RouterModule } from '@angular/router';
import { SidenavService } from '../../../services/sidenav/sidenav.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  constructor(private router: Router, private sidenavService: SidenavService) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    this.sidenavService.collapsed$.subscribe(collapsed => {
      this.collapsed = collapsed;
    });
  }

  toggleCollapsed(): void {
    this.sidenavService.toggleCollapsed(); 
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  // Método para fechar o sidenav
  closeSidenav(): void {
    this.sidenavService.setCollapsed(true); // Coloca o estado como "fechado"
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}
