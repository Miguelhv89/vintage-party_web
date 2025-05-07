import { Component } from '@angular/core';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [QuienesSomosComponent, GaleriaComponent, ContactoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  carouselImages: string[] = [
    'images/banner_1.jpeg',
    'images/banner_3.jpeg',
    'images/banner_4.jpeg',
    'images/banner_5.jpeg'
  ];
}
