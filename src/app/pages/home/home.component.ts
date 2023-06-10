import { Component } from '@angular/core';
import { HomeCarouselComponent } from 'src/app/components/home-carousel/home-carousel.component';

@Component({
  standalone: true,
  imports: [HomeCarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {
    console.log('Home  Loaded');
  }
}
