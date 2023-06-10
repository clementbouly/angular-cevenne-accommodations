import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'prices',
        loadComponent: () =>
            import('./pages/prices/prices.component').then((m) => m.PricesComponent),
    },
    {
        path: 'tourism',
        loadComponent: () =>
            import('./pages/tourism/tourism.component').then(
                (m) => m.TourismComponent
            ),
    },
];
