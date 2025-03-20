import { Component } from '@angular/core';
import { HOME_DATA } from './data';
import { CarouselComponent } from '../../core/components/carousel/carousel.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = HOME_DATA;
}
