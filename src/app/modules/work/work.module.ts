import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkHomeComponent } from './work-home/work-home.component';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';

const routes: Routes = [
  {
    path: '',
    component: WorkHomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WorkHomeComponent
  ]
})
export class WorkModule { }
