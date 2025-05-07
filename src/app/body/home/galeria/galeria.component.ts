import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  galleryItems: { title: string, image: string }[] = [
    { title: 'Mobiliario Vintage', image: 'images/gallery_vintage.jpeg' },
    { title: 'Mobiliario Corporativo', image: 'images/gallery_corporativo.jpeg' },
    { title: 'Mobiliario Rustico', image: 'images/gallery_rustico.jpeg' },
    { title: 'Salas Lounge', image: 'images/gallery_lounge.jpeg' },
    { title: 'Mesas y Sillas', image: 'images/gallery_mesas.jpeg' },
    { title: 'Mobiliario Industrial', image: 'images/gallery_industrial.jpeg' }
  ];
}
