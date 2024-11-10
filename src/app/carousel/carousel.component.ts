import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  currentIndex = 0;
  isFading = false;

  @Input() items: any[] = [];

  setCurrentSlide(index: number) {
    if (index !== this.currentIndex) {
      this.isFading = true;
      setTimeout(() => {
        this.currentIndex = index;
        this.isFading = false;
      }, 500);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
