import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Category, CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  fecha: string = new Date().getFullYear().toString();
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {
    this.categories = this.categoryService.getCategories();
  }

  selectCategory(category: Category): void {    
    this.router.navigate(['/store', category.id]);
  }
}
