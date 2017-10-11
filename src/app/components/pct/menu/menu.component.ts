/**
 * Created by admin on 10/10/17.
 */
import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.less'],
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  @Output() onSelectItem = new EventEmitter<any>();

  items: Array<any>;

  verticalTabs = [{
    name: 'NPI/Tooling/Accessories',
    active: false,
    code: "",
    children: [
      {
        name: 'ECO Summary',
        code: "ECOSummaryComponent"
      },
      {
        name: 'Service Parent/Child',
        code: "ServiceParentChildComponent"
      },
      {
        name: 'Notes',
        code: "NotesDocsComponent"
      },
      {
        name: 'Notes + Docs',
        code: "NotesDocsComponent"
      },
      {
        name: 'Group Summary',
        code: "GroupSummaryComponent"
      },
      {
        name: 'Part Attributes',
        code: "PartAttributeComponent"
      }, {
        name: 'Part Disposition',
        code: "PartDispositionComponent"
      }, {
        name: 'Service Impact',
        code: "ServiceImpactComponent"
      }]
  }
    , {
      name: 'Service Pricing',
      active: false,
      code: "ServicePricingComponent"
    }
    , {
      name: 'Demand Planning',
      active: false,
      code: "DemandPlanningComponent"
    }
    , {
      name: 'Procurement, GSMs + MRP',
      active: false,
      code: "ProcurementComponent"
    }
    ,
  ];

  constructor() {

  }

  onClickItem(data) {
    !data.isChild && this.verticalTabs.forEach((_item) => {
      _item.active = false;
    });
    data.item.active = true;
    if(data.item.code){
      this.onSelectItem.emit(data.item.code);
    }
  }
}
