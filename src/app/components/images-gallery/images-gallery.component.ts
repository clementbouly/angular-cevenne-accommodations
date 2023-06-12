import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

interface GalleryImage {
  title: string;
  identifier: string;
  src: string;
}

@Component({
  selector: 'app-images-gallery',
  standalone: true,
  imports: [CommonModule, LightboxModule, GalleryModule],
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.scss'],
})
export class ImagesGalleryComponent implements OnInit {
  imagesItems: GalleryItem[] = [];

  images: GalleryImage[] = [
    {
      title: 'Gallery 1',
      identifier: '1',
      src: '/assets/img/gallery/piscine_1.webp',
    },
    {
      title: 'Gallery 13',
      identifier: '2',
      src: '/assets/img/gallery/Accueil_1.webp',
    },
    {
      title: 'Gallery 3',
      identifier: '3',
      src: '/assets/img/gallery/ext_6.webp',
    },
    {
      title: 'Gallery 4',
      identifier: '4',
      src: '/assets/img/gallery/repas_1.webp',
    },
    {
      title: 'Gallery 5',
      identifier: '5',
      src: '/assets/img/gallery/ext_4.webp',
    },
    {
      title: 'Gallery 6',
      identifier: '6',
      src: '/assets/img/gallery/piscine_2.webp',
    },
    {
      title: 'Gallery 7',
      identifier: '7',
      src: '/assets/img/gallery/ext_2.webp',
    },
    {
      title: 'Gallery 8',
      identifier: '8',
      src: '/assets/img/gallery/gite1.webp',
    },
    {
      title: 'Gallery 9',
      identifier: '9',
      src: '/assets/img/gallery/ext_1.webp',
    },
    {
      title: 'Gallery 10',
      identifier: '10',
      src: '/assets/img/gallery/pinson_4.webp',
    },
    {
      title: 'Gallery 11',
      identifier: '11',
      src: '/assets/img/gallery/picSaintLoup.jpg',
    },
    {
      title: 'Gallery 12',
      identifier: '12',
      src: '/assets/img/gallery/entrée_domaine_1.webp',
    },
    {
      title: 'Gallery 2',
      identifier: '13',
      src: '/assets/img/gallery/ext_5.webp',
    },
    {
      title: 'Gallery 14',
      identifier: '14',
      src: '/assets/img/gallery/piscine_3.webp',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.imagesItems = this.images.map(
      (img) => new ImageItem({ src: img.src, thumb: img.src })
    );
  }

  isMobile() {
    return window.innerWidth < 900;
  }
}
