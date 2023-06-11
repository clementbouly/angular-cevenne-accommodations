import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { Accommodation } from 'src/app/shared/models/Accommodation';
import { AccommodationsService } from 'src/app/shared/services/accommodations.service';

@Component({
  selector: 'app-accomodations',
  standalone: true,
  imports: [CommonModule, AccommodationComponent],
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.scss'],
})
export class AccommodationsComponent implements OnInit {
  accommodations: Accommodation[] = [];

  constructor(private accommodationsService: AccommodationsService) {
  }

  ngOnInit(): void {
    this.accommodations = this.accommodationsService.getAccommodations();
  }
}
