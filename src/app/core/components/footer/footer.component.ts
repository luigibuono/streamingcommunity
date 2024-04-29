import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class FooterComponent {

  socialData = [
    {url: 'https://github.com/luigibuono', name: 'Github', img: './assets/svg/github.svg'}
  ];

  constructor() { }
}
