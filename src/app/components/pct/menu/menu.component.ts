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
  //@Input() activeIndex:any = 0;

  items : Array<any>;

  verticalTabs = [{
    name : 'NPI/Tooling/Accessories',
    active : false,
    children : [{
      name : 'NPI/Tooling/Accessories'
    },
    {
      name : 'ECO Summary'
    },
    {
      name : "Service Parent/Child"
    },
    {
      name : 'Notes'
    },
    {
      name : 'Notes + Docs'
    },
    {
      name : 'Group Summary'
    },
    {
      name : 'Part Attributes'
    },{
      name : 'Part Disposition'
    },{
      name : 'Service Impact'
    }
    ]
  }
    ,{
    name : 'Service Pricing',
    active : false
    }
    ,{
    name : 'Demand Planning',
    active : false
    }
    ,{
    name : 'Procurement, GSMs + MRP',
    active : false
    }
    ,
  ];

  constructor() {

  }

  onClickItem(item){
    this.verticalTabs.forEach((_item)=>{
      _item.active = false;
    })
    item.active = true;
  }
}
