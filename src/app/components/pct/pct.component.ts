import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pct',
  styleUrls: ['./pct.component.less'],
  templateUrl: './pct.component.html'
})
export class PctComponent implements OnInit {
  bredcrumbs : any;
  statusBarIndex : any = 0;

  ngOnInit() {
    setInterval(()=>{
      this.statusBarIndex ++;
      this.statusBarIndex = this.statusBarIndex % 5
    }, 3000);
  }


}
