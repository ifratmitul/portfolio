import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

export interface Publication {
  order: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  isPreprint: boolean;
  link: string;
}

@Component({
  selector: 'app-publication-item',
  imports: [NgIf],
  templateUrl: './publication-item.component.html',
  styleUrl: './publication-item.component.scss'
})
export class PublicationItemComponent {
  @Input() publication!: Publication;
}
