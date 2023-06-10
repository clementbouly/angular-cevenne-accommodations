import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home-carousel',
  template: `
    <section class="section-carousel">
      <div class="carousel">
        <!-- https://github.com/MurhafSousli/ngx-gallery/wiki/Gallery-API -->
        <gallery
          gallerize
          [items]="images"
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
  images: GalleryItem[] = [];
  imagesPath = [
    '/assets/img/accueil/Accueil_1.webp',
    '/assets/img/accueil/Accueil_2.webp',
    '/assets/img/accueil/Accueil_3.webp',
    '/assets/img/accueil/Accueil_1.webp',
    '/assets/img/accueil/Accueil_2.webp',
    '/assets/img/accueil/Accueil_3.webp',
    '/assets/img/accueil/Accueil_1.webp',
    '/assets/img/accueil/Accueil_2.webp',
  ];

  ngOnInit(): void {
    const imagesItems = this.imagesPath.map(
      (path) => new ImageItem({ src: path, thumb: path })
    );
    this.images = imagesItems;
  }
}
