import { Component } from '@angular/core';
import { HOME_DATA } from './data';
import { TestDynamicTableComponent } from '../../test-dynamic-table/test-dynamic-table.component';
import { SidenavComponent } from '../../core/components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../core/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [TestDynamicTableComponent, SidenavComponent, CommonModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  sidenavCollapsed = false;
  title = HOME_DATA;

  handleSidenavToggle(event: { collapsed: boolean; screenWidth: number }) {
    this.sidenavCollapsed = event.collapsed;
  }
}
