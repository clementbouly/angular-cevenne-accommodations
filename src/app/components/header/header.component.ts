import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderLinkComponent } from './header-link/header-link.component';

export interface Link {
  path: string;
  title: string;
}

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, HeaderLinkComponent],
})
export class HeaderComponent {
  links = [
    { path: 'home', title: 'Accueil' },
    { path: 'prices', title: 'Tarif' },
    { path: 'tourism', title: 'Tourisme' },
    { path: 'shopping', title: 'Boutique' },
    { path: 'contact', title: 'Contact' },
  ];
}
