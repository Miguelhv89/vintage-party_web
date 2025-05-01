import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { SitemapComponent } from '../../sitemap/sitemap.component';
import { Category, CategoryService } from '../../category.service';
import { Router } from '@angular/router';

interface Product {
  name: string;
  price: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-store',
  imports: [SearchComponent, SitemapComponent, CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  categories: Category[] = [];
  selectedCategory: string = 'MALETA';

  constructor(private categoryService: CategoryService, private router: Router) {
    this.categories = this.categoryService.getCategories();
  }

  products: Product[] = [
    { name: 'Maleta Verde Envelhecida M', price: '49,83', image: 'assets/images/maleta-verde-envelhecida-m.jpg', category: 'MALETA' },
    { name: 'Maleta Verde Envelhecida', price: '56,60', image: 'assets/images/maleta-verde-envelhecida.jpg', category: 'MALETA' },
    { name: 'Maleta Menta Detalhe Rosé', price: '104,40', image: 'assets/images/maleta-menta-detalhe-rose.jpg', category: 'MALETA' },
    { name: 'Maleta Menta Detalhe Rosé', price: '98,60', image: 'assets/images/maleta-menta-detalhe-rose-2.jpg', category: 'MALETA' },
    { name: 'Maleta Vintage Rosa', price: '79,66', image: 'assets/images/maleta-vintage-rosa.jpg', category: 'MALETA' },
    { name: 'MALETA GRID CHOCO 17 X 8', price: '35,46', image: 'assets/images/maleta-grid-choco-17x8.jpg', category: 'MALETA' },
    { name: 'MALETA GRID CARAMELO 9A X 9C', price: '38,23', image: 'assets/images/maleta-grid-caramelo-9ax9c.jpg', category: 'MALETA' },
    { name: 'Mala Resina London', price: '24,91', image: 'assets/images/mala-resina-london.jpg', category: 'MALETA' },
    { name: 'Mala de Viagem Bege Metal', price: '55,49', image: 'assets/images/mala-de-viagem-bege-metal.jpg', category: 'MALETA' },
    { name: 'Maleta Vintage Verde', price: '58,63', image: 'assets/images/maleta-vintage-verde.jpg', category: 'MALETA' },
    { name: 'Maleta Cinema', price: '41,03', image: 'assets/images/maleta-cinema.jpg', category: 'MALETA' },
    { name: 'Maleta Cinema', price: '35,17', image: 'assets/images/maleta-cinema-2.jpg', category: 'MALETA' }
  ];

  selectCategory(category: Category): void {
    this.selectedCategory = category.name;
    this.router.navigate(['/store', category.id]);
  }
}
