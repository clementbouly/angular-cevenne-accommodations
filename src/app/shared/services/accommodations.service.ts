import { Injectable } from '@angular/core';
import { Accommodation } from '../models/Accommodation';

@Injectable({
  providedIn: 'root',
})
export class AccommodationsService {
  accommodations: Accommodation[] = [
    {
      id: 1,
      identifier: 'pinsons',
      title: 'Nids des pinsons',
      subtitle: 'Studio pour 2 personnes',
      description: `En rez de chaussée devant la piscine, venez profiter de ce superbe studio
      sur-équipé avec vue sur les bois de chênes côté fenêtre et sur terrasse
      privative côté baie vitrée`,
      mainImage: '/assets/img/accommodations/pinson_7.webp',
      secondaryImage: '/assets/img/accommodations/pinson_1.webp',
      position: 'textLeft',
    },
    {
      id: 2,
      identifier: 'mesanges',
      title: 'Nids des mésanges',
      subtitle: 'Studio pour 3 personnes',
      description: `Près de la piscine, venez profiter de ce superbe studio sur-équipé avec
      vue sur les bois de chênes côté fenêtre et sur terrasse privative côté
      baie vitrée`,
      mainImage: '/assets/img/accommodations/Mesanges_02.webp',
      secondaryImage: '/assets/img/accommodations/pinson_1.webp',
      position: 'textRight',
    },
  ];
  constructor() { }

  getAccommodations(): Accommodation[] {
    return this.accommodations;
  }
}
