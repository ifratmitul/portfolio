import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

export interface Experience {
  order: number;
  position: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  details: string[];
  logo: string;
  tools?: string[];
}


@Component({
  selector: 'app-experience-card',
  imports: [NgFor, NgIf],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  @Input() experience!: Experience;
}
