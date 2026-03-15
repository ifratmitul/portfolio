import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Experience } from '../components/experience-card/experience-card.component';

interface ExperienceResponse {
  data: Experience[];
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experienceSubject = new BehaviorSubject<Experience[]>([]);
  public experiences$ = this.experienceSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadExperiences();
  }

  private loadExperiences(): void {
    this.http.get<ExperienceResponse>('assets/data/experience.json')
      .subscribe({
        next: (response) => {
          const sortedPublications = response.data.sort((a, b) => a.order - b.order);
          this.experienceSubject.next(sortedPublications);
        },
        error: (error) => {
          console.error('Error loading publications:', error);
        }
      });
  }

  getAllExperiences(): Observable<Experience[]> {
    return this.experiences$;
  }

  get_n_Experience(n: number): Observable<Experience[]> {
    return this.experiences$.pipe(
      map(exp => exp.slice(0, n))
    );
  }
}
