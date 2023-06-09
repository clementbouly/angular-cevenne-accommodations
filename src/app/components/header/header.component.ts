import { Component } from '@angular/core';

export interface Link {
  path: string;
  title: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links = [
    { path: 'home', title: 'Accueil' },
    { path: 'prices', title: 'Tarif' },
    { path: 'tourism ', title: 'Tourisme' },
    { path: 'shopping', title: 'Boutique' },
    { path: 'contact', title: 'Contact' },
  ];
}
