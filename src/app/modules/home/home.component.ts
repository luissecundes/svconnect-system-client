import { Component } from '@angular/core';
import { HOME_DATA } from './data';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidenavBaseComponent } from '../../core/utils/sidenav.mixin';
import { BaseLayoutComponent } from '../../shared/layout/base-layout/base-layout.component';

@Component({
  selector: 'app-home',
  imports: [BaseLayoutComponent, CommonModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends SidenavBaseComponent {
  title = HOME_DATA;
}
