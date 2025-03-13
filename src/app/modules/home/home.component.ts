import { Component } from '@angular/core';
import { HOME_DATA } from './data';
import { CarouselComponent } from '../../core/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = HOME_DATA;
}
