import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    '../../../../assets/carousel/img1.jpg',
    'assets/carousel/img2.jpg',
    'assets/carousel/img3.jpg',
    'assets/carousel/img4.jpg',
    'assets/carousel/img5.jpg',
    'assets/carousel/img6.jpg',
    'assets/carousel/img7.jpg',
  ];

  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number): void {
    this.currentIndex = index;
  }

  private startAutoSlide(): void {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }
}
