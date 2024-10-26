import { Component } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss',
})
export class FilmComponent {
  items = [
    {
      url: '../../assets/images/film_1.png',
      description:
        'У фільмі розповідається історія українських письменників доби "розстріляного відродження", яких зібрали в одному будинку, щоби вони працювали на благо радянської системи.',
      description2:
        'У 1927 році в тодішній столиці УРСР Харкові за наказом Йосипа Сталіна, збудували кооперативний будинок "Слово". Найвидатніших українських письменників заселили у комфортні квартири.',
    },
  ];

  items1 = [
    {
      url: '../../assets/images/film_2.png',
      description:
        'Пізніше до письменників підселили невідомого молодого автора Володимира Акімова, після появи якого в будинку почалися дивні події.',
      description2:
        'Світова прем\'єра фільму відбулася на 37-му Варшавському кінофестивалі у 2021 році, а українська — на фестивалі "Миколайчук OPEN" в Чернівцях 16 червня 2022-го.',
      description3:
        'Тарас Томенко також знімав документальний фільм "Будинок «Слово»". У 2018 році він здобув національну кінопремію "Золота дзиґа" в категорії "Найкращий документальний фільм". Згодом режисер вирішив зняти про будинок "Слово" художню стрічку. Сценаристкою обидвох проєктів разом із Томенком була українська письменниця Любов Якимчук.',
    },
  ];

  items2 = [
    {
      url: '../../assets/images/film_3.png',
      title:
        '7 березня 2022 року будинок пошкоджено внаслідок ракетно-артилерійського обстрілу російськими військами. Наразі в одній з квартир діє літературна резиденція.',
    },
  ];
}
