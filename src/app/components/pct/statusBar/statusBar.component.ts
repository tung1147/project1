import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-status-bar',
  styleUrls: ['./statusBar.component.less'],
  templateUrl: './statusBar.component.html'
})
export class StatusBarComponent {
  @Input() activeIndex:any = 0;

  items : Array<any>;

  constructor() {
    this.items = [{
      name : "Critical"
    },{
      name : "In-Progress",
    },{
      name : "Review",
    },{
      name : "Pending Implementation",
    },{
      name : "Complete",
    }];
  }



}
