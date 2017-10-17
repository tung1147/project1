import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/shared/pagenotfound.component';
import {PCTModule} from './components/pct/pct.module';

import {PctComponent} from './components/pct/pct.component';

export const routes: Routes = [
  {path: '', component: PctComponent},
  {path: '**', component: PageNotFoundComponent},
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
