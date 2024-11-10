import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent {
  items1 = [
    {
      url: 'assets/images/20.webp',
    },
    {
      url: 'assets/images/11.webp',
    },
    {
      url: 'assets/images/15.webp',
    },
    {
      url: 'assets/images/17.webp',
    },
    {
      url: 'assets/images/13.webp',
    },
    {
      url: 'assets/images/18.webp',
    },
  ];

  items2 = [
    {
      url: 'assets/images/8.webp',
    },
    {
      url: 'assets/images/16.webp',
    },
    {
      url: 'assets/images/12.webp',
    },
    {
      url: 'assets/images/19.webp',
    },
    {
      url: 'assets/images/9.webp',
    },
    {
      url: 'assets/images/14.webp',
    },
  ];
}
