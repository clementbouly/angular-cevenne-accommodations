import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationItemComponent } from './prestation-item/prestation-item.component';
import { Prestation } from 'src/app/shared/models/Prestation';

@Component({
  selector: 'app-prestations-list',
  standalone: true,
  imports: [CommonModule, PrestationItemComponent],
  templateUrl: './prestations-list.component.html',
  styleUrls: ['./prestations-list.component.scss'],
})
export class PrestationsListComponent {
  prestations: Prestation[] = [
    {
      title: 'piscine exterieur',
      description:
        "Accessible pour les résidents du gîte d'avril à octobre et pour christine toute l’année",
      image: '/assets/icons/pool.svg',
    },
    {
      title: 'terrasse privative',
      description:
        'Terrasse assez privé pour qu’une personnne d’1m90 ne puisse pas regarder par dessus',
      image: '/assets/icons/terrace.svg',
    },
    {
      title: 'climatisation',
      description:
        'Pour que les mélodie n’ai pas froid l’hiver, l’été le printemps l’autumn et autres nouvelles saisons',
      image: '/assets/icons/clim.svg',
    },
    {
      title: 'wi-fi',
      description:
        'Wifi avec débit de fibre optique mais potentielement un VPN ça dépend du Manu',
      image: '/assets/icons/wifi.svg',
    },
    {
      title: 'conseils et suggestions',
      description:
        'Conseils sur les sorties aux alentours mais pas en ville parce que la ville c’est pas bien',
      image: '/assets/icons/map.svg',
    },
    {
      title: 'garage moto',
      description:
        'Garage moto pour les motards qui n’ont pas de harley davinson (c’est juste que ça rentre pas)',
      image: '/assets/icons/moto.svg',
    },
  ];
}
