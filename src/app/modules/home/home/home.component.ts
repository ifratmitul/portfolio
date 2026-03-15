import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { AboutmeComponent } from "../../../components/aboutme/aboutme.component";

@Component({
  selector: 'app-home',
  imports: [AboutmeComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showScrollIndicator = true;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Hide indicator after scrolling 100px
    this.showScrollIndicator = window.scrollY < 100;
  }
}
