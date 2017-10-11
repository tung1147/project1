import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { MaterialModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import custorm modules
import {PCTModule} from './components/pct/pct.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/shared/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    MaterialModule,
    NgbModule.forRoot(),
    PCTModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
