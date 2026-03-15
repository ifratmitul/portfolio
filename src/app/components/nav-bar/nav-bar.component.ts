import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT, NgClass } from '@angular/common';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [NgClass, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  private document = inject(DOCUMENT);
  
  isDarkMode = false;
  isMobileMenuOpen = false;
  isScrolled = false;

  ngOnInit(): void {
    this.initializeTheme();
    console.log('Component initialized, isDarkMode:', this.isDarkMode); // Debug log
  }

  initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme');

    // Default to light mode unless user explicitly chose dark
    if (savedTheme === 'dark') {
      this.document.documentElement.classList.add('dark');
      this.isDarkMode = true;
    } else {
      this.document.documentElement.classList.remove('dark');
      this.isDarkMode = false;
    }
  }

  toggleTheme(): void {

    this.document.documentElement.classList.toggle('dark');
    this.isDarkMode = !this.isDarkMode;

    if (this.document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');

    } else {
      localStorage.setItem('theme', 'light');

    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY;
    this.isScrolled = scrollY > 50;
   }

  openMenu(): void {
     this.isMobileMenuOpen = true;
  }

  closeMenu(): void {
 
    this.isMobileMenuOpen = false;
  }
}