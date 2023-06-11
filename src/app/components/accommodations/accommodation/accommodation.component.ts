import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Accommodation } from 'src/app/shared/models/Accommodation';

@Component({
  selector: 'app-accommodation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss'],
})
export class AccommodationComponent {
  @Input()
  accommodation!: Accommodation;
}
