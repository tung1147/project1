import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { MaterialModule } from '@angular/material';

// import custorm modules
import {PCTModule} from './components/pct/pct.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/shared/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CriticalComponent } from './components/tabs/critical/critical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    TabsComponent,
    CriticalComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    MaterialModule,
    PCTModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
