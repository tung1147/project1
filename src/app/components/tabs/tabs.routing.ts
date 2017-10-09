import { Routes } from '@angular/router';
import { CriticalComponent } from './critical/critical.component';

export const tabsRoutes: Routes = [
  { path: '', component: CriticalComponent },
  { path: '**', component: CriticalComponent }
];
