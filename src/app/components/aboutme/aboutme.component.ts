import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Experience, ExperienceCardComponent } from '../experience-card/experience-card.component';
import { ExperienceService } from '../../services/experience.service';
import { PublicationService } from '../../services/publication.service';
import { PublicationItemComponent } from '../publication-item/publication-item.component';

@Component({
  selector: 'app-aboutme',
  imports: [ExperienceCardComponent, PublicationItemComponent, NgIf, NgFor, RouterLink],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent implements OnInit {
  experience: Experience[] = []; 
  recent_publications: any[] = [];
  constructor(private experienceService: ExperienceService,
    private publicationService: PublicationService
  ) {

  }

  ngOnInit(): void {
    this.experienceService.get_n_Experience(2).subscribe({
      next: (response: Experience[]) => {
        console.log('Received experience:', response);
        if (response.length > 0) {
          this.experience = response;
        }
      },
      error: (error: Error) => {
        console.error('Error loading experience:', error);
      }
    });

    this.publicationService.getTopPublications(3).subscribe({
        next: (response) => {
          console.log('Received publications:', response);
          this.recent_publications = response;
        },
        error: (error) => {
          console.error('Error loading publications:', error);
        }
      });
  }




}
