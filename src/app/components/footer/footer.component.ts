import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Logo {
  src: string;
  alt: string;
  class?: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  partnersLogo: Logo[] = [
    {
      src: '/assets/logo/Herault Departement.png',
      alt: 'Département hérault',
    },
    {
      src: '/assets/logo/LPO.png',
      alt: 'Ligue de Protection des oiseaux',
      class: 'partners-logo__LPO',
    },
    {
      src: '/assets/logo/moto et motards.png',
      alt: 'Tourisme hérault',
    },
    {
      src: '/assets/logo/moto-trip.png',
      alt: 'Tourisme hérault',
    },
    {
      src: '/assets/logo/Parc cévennes.png',
      alt: 'Parc des cévennes',
      class: 'partners-logo__parc-cevennes',
    },
    {
      src: '/assets/logo/Pic saint loup.png',
      alt: 'Tourisme hérault',
    },
    {
      src: '/assets/logo/repaire motards.png',
      alt: 'Tourisme hérault',
    },
    {
      src: '/assets/logo/Tourism_herault.png',
      alt: 'Tourisme hérault',
      class: 'partners-logo__tourism-herault',
    },
  ];
}
