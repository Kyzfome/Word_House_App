import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  items1 = [
    {
      url: 'assets/images/20.png',
    },
    {
      url: 'assets/images/11.png',
    },
    {
      url: 'assets/images/15.png',
    },
    {
      url: 'assets/images/17.png',
    },
    {
      url: 'assets/images/13.png',
    },
    {
      url: 'assets/images/18.png',
    },
  ]

  items2 = [
    {
      url: 'assets/images/8.png',
    },
    {
      url: 'assets/images/16.png',
    },
    {
      url: 'assets/images/12.png',
    },
    {
      url: 'assets/images/19.png',
    },
    {
      url: 'assets/images/9.png',
    },
    {
      url: 'assets/images/14.png',
    },
  ]
}
