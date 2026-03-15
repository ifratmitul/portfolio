import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
     loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./modules/education/education.module').then(m => m.EducationModule)
  },
  {
    path: 'work',
    loadChildren: () => import('./modules/work/work.module').then(m => m.WorkModule)
  }
];
