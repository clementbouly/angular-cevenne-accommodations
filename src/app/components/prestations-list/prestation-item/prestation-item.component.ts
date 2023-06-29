import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/Prestation';

@Component({
  selector: 'app-prestation-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prestation-item.component.html',
  styleUrls: ['./prestation-item.component.scss'],
})
export class PrestationItemComponent {
  @Input() prestation: Prestation = {
    title: '',
    description: '',
    image: '',
  };
}
