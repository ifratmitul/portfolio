import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT, NgClass } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [NgClass],
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
    console.log('toggleTheme called'); // Debug log
    this.document.documentElement.classList.toggle('dark');
    this.isDarkMode = !this.isDarkMode;

    if (this.document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      console.log('Theme set to dark'); // Debug log
    } else {
      localStorage.setItem('theme', 'light');
      console.log('Theme set to light'); // Debug log
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY;
    this.isScrolled = scrollY > 50;
    console.log('Scroll Y:', scrollY, 'isScrolled:', this.isScrolled); // Debug log
  }

  openMenu(): void {
    console.log('Opening menu'); // Debug log
    this.isMobileMenuOpen = true;
  }

  closeMenu(): void {
    console.log('Closing menu'); // Debug log
    this.isMobileMenuOpen = false;
  }
}