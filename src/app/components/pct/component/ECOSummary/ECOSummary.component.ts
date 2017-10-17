import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-eco-summary',
  styleUrls: ['./ECOSummary.component.less'],
  templateUrl: './ECOSummary.component.html'
})
export class ECOSummaryComponent implements OnInit, OnDestroy {
  disabled : Boolean = true;
  _subscription : any;

  constructor(private service: RoleService) {
    console.log("this.service",this.service);
    this.disabled = (this.service.getRole() == 'admin') ? false : true;
  }

  ngOnInit(){
    this._subscription = this.service.roleChange.subscribe((value) => {
      this.disabled = (value == 'admin') ? false : true;
    });
  }
  onKey(event){
    console.log("event",event);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
