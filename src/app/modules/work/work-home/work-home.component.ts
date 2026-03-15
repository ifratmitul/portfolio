import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../../services/experience.service';
import { Experience, ExperienceCardComponent } from '../../../components/experience-card/experience-card.component';

@Component({
  selector: 'app-work-home',
  imports: [NgFor, NgIf, ExperienceCardComponent],
  templateUrl: './work-home.component.html',
  styleUrl: './work-home.component.scss'
})
export class WorkHomeComponent implements OnInit {

  experiences: Experience[] = [];
  constructor(private workService: ExperienceService) {}

  ngOnInit(): void {
    this.workService.getAllExperiences().subscribe({
      next: (response) => {
        console.log('Received experience:', response);
        if (response.length > 0) {
          this.experiences = response;
        }
      },
      error: (error) => {
        console.error('Error loading experience:', error);
      }
    });
  }
}
