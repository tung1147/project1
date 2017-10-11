import { Component, OnInit, Inject } from '@angular/core';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-critical',
  templateUrl: './critical.component.html'
})
export class CriticalComponent implements OnInit {

  verticalItems: Array<any>;

  constructor() {
    this.verticalItems = [{
      name: 'Critical',
      link: ''
    }, {
      name: 'In-Progress',
      link: ''
    }, {
      name: 'Review',
      link: ''
    }, {
      name: 'Pending Implementation',
      link: ''
    }, {
      name: 'Complete',
      link: ''
    }];
  }

  ngOnInit() {
    // Load menu items from menu.json
    console.log('ngOnInit');
  }
}

