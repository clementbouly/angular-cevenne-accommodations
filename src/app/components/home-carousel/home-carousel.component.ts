import { Component, OnInit } from '@angular/core';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

interface Image {
  path: string;
}

@Component({
  standalone: true,
  imports: [GalleryModule, LightboxModule],
  selector: 'app-home-carousel',
  template: `
    <section class="section-carousel">
      <div class="carousel">
        <!-- https://github.com/MurhafSousli/ngx-gallery/wiki/Gallery-API -->
        <gallery
          class="carousel__gallery"
          [items]="imagesItems"
          [thumb]="false"
          imageSize="cover"
          [autoPlay]="false"
          [counter]="false"
        ></gallery>

        <div class="carousel__title">
          <h1 class="carousel__title-main">
            Location de gîtes dans les Cévennes
          </h1>
          <p class="carousel__title-sub">
            Réservez nos appartements de 1 à 2 personnes
          </p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home-carousel.component.scss'],
})
export class HomeCarouselComponent implements OnInit {
  imagesItems: GalleryItem[] = [];
  images: Image[] = [
    { path: '/assets/img/accueil/Accueil_1.webp' },
    { path: '/assets/img/accueil/Accueil_2.webp' },
    { path: '/assets/img/accueil/Accueil_3.webp' },
    { path: '/assets/img/accueil/Accueil_1.webp' },
    { path: '/assets/img/accueil/Accueil_2.webp' },
    { path: '/assets/img/accueil/Accueil_3.webp' },
    { path: '/assets/img/accueil/Accueil_1.webp' },
    { path: '/assets/img/accueil/Accueil_2.webp' },
  ];

  ngOnInit(): void {
    const imagesItems = this.images.map(
      (img) => new ImageItem({ src: img.path, thumb: img.path })
    );
    this.imagesItems = imagesItems;
  }
}
