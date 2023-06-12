import { Component } from '@angular/core';
import { AccommodationsComponent } from 'src/app/components/accommodations/accommodations.component';
import { AreaPresentationComponent } from 'src/app/components/area-presentation/area-presentation.component';
import { HomeCarouselComponent } from 'src/app/components/home-carousel/home-carousel.component';
import { PrestationsListComponent } from 'src/app/components/prestations-list/prestations-list.component';
import { SeparatorComponent } from 'src/app/shared/components/separator/separator.component';

@Component({
  standalone: true,
  imports: [
    HomeCarouselComponent,
    AccommodationsComponent,
    SeparatorComponent,
    AreaPresentationComponent,
    PrestationsListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {
    console.log('Home  Loaded');
  }
}
