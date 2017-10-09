import { Component, OnInit, Inject } from '@angular/core';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  verticalItems : Array<any>;

  constructor() {
  }

  ngOnInit() {
    // Load menu items from menu.json
    console.log("ngOnInit");
  }
}

