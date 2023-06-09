import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HomeComponent, SliderComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: HomeComponent }]),
    ],
})
export class HomeModule {
    constructor() {
        console.log('Home Module Loaded');
    }
}
