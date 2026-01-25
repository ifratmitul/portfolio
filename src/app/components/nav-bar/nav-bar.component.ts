import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isDarkMode = false;
  isMobileMenuOpen = false;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  openMenu(): void {
    this.isMobileMenuOpen = true;
  }

  closeMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
