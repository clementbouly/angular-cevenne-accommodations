import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeCarouselComponent } from 'src/app/components/home-carousel/home-carousel.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@NgModule({
    declarations: [HomeComponent, HomeCarouselComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: HomeComponent }]),
        GalleryModule,
        LightboxModule,
    ],
})
export class HomeModule {
    constructor() {
        console.log('Home Module Loaded');
    }
}
