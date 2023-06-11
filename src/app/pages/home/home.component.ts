import { Component } from '@angular/core';
import { AccommodationsComponent } from 'src/app/components/accommodations/accommodations.component';
import { HomeCarouselComponent } from 'src/app/components/home-carousel/home-carousel.component';

@Component({
  standalone: true,
  imports: [HomeCarouselComponent, AccommodationsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {
    console.log('Home  Loaded');
  }
}
