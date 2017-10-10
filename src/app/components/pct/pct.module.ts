/**
 * Created by Admin on 10/10/2017.
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';

import {PctComponent} from './pct.component';
import {StatusBarComponent} from './statusBar/statusBar.component';
import {MenuItemComponent} from './menu/item.component';
import {MenuComponent} from './menu/menu.component';


@NgModule({
  declarations: [
    PctComponent,
    StatusBarComponent,
    MenuItemComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  exports: [PctComponent],
  bootstrap: []
})
export class PCTModule {
}

