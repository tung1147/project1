/**
 * Created by admin on 10/10/17.
 */
import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.less'],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Input() activeIndex:any = 0;

  items : Array<any>;

  subTabs = ;
  verticalTabs = [{
    name : 'NPI/Tooling/Accessories',
    children : [
      'NPI/Tooling/Accessories',
      'ECO Summary',
      'Service Parent/Child',
      'PCA Summary',
      'Notes + Docs', 'Group Summary', 'Part Attributes', 'Part Disposition', 'Service Impact'
    ]
  }
    ,{
    name : 'Service Pricing'
    }
    ,{
    name : 'Demand Planning'
    }
    ,{
    name : 'Procurement, GSMs + MRP'
    }
    ,
  ];

  constructor() {

  }
}
