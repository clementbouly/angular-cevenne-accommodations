import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODO: Lazyloading for modules when needed
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'prices',
    loadChildren: () =>
      import('./pages/prices/prices.module').then((m) => m.PricesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
