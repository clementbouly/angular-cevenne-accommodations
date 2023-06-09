import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PricesComponent } from './prices.component';

@NgModule({
    declarations: [PricesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: PricesComponent }]),
    ],
})
export class PricesModule {
    constructor() {
        console.log('Prices Module Loaded');
    }
}
