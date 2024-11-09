import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  currentIndex = 0;
  isFading = false;

  items = [
    {
      url: '../../assets/images/semenko.png',
      title: 'Михайль Семенко',
      text: 'Блискучою містифікацією в тому самому журналі був жартівливий некролог по поетові Семенку, написаний самим Семенком...',
    },
    {
      url: '../../assets/images/tychuna.png',
      title: 'Павло Тичина',
      text: '“Самого Тичину ви у „Слові” рідко зустріли. Створювалося враження, що Тичина навмисне ховається від людей. Ще коли ми жили на Михайлівській площі, Тичина в товаристві Любченка, Хвильового, Досвітнього приходив досить часто до нас. Сідав у куточку і мовчав. Але бували випадки, що Тичина раптом починав говорити. Тоді його спогади про духовну семінарію ставали в центрі загальної уваги. Тичина вмів оповідати смішні до сліз речі, сам не усміхнувшись навіть.”',
    },
  ];

  setCurrentSlide(index: number) {
    if (index !== this.currentIndex) {
      this.isFading = true; // Trigger fade-out class
      setTimeout(() => {
        this.currentIndex = index;
        this.isFading = false; // Remove fade-out class after image switch
      }, 500); // Match this duration to CSS transition time
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
