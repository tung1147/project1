import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/shared/pagenotfound.component';
import {HomeComponent} from './components/home/home.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {tabsRoutes} from './components/tabs/tabs.routing';

import {PctComponent} from './components/pct/pct.component';

export const routes: Routes = [
  {path: '', component: PctComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: 'tabs', component: TabsComponent, children: tabsRoutes}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
