import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pct-header',
  styleUrls: ['./header.component.less'],
  templateUrl: './header.component.html'
})
export class PCTHeaderComponent {
  @Input() activeIndex: any = 0;

  items: Array<any>;

  constructor() {

  }



}
