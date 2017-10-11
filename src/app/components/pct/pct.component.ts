import {AfterViewInit, Component, OnDestroy, OnInit, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {PTCItemService} from './ptcItem.service';
import {PTCItemDirective} from './component/ptcItem.directive';

@Component({
  selector: 'app-pct',
  styleUrls: ['./pct.component.less'],
  templateUrl: './pct.component.html'
})
export class PctComponent implements OnInit, OnDestroy, AfterViewInit {
  statusBarIndex: any = 0;
  interval: any;
  PTCitems: Array<any>;
  @ViewChild(PTCItemDirective) ptcItemDirective: PTCItemDirective;

  constructor(private service: PTCItemService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.statusBarIndex++;
      this.statusBarIndex = this.statusBarIndex % 5;
    }, 3000);

    this.PTCitems = this.service.getItem();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngAfterViewInit() {
    // this.loadComponent();
    // this.getAds();
  }

  showComponent(componentCode) {
    console.log("showComponent", componentCode);
    // console.log("this.PTCitems",this.PTCitems);

    let ptcItem = this.PTCitems.find((item) => {
      return item.code == componentCode;
    });
    console.log("ptcItem",ptcItem);

    if(!ptcItem) {
      console.error("ptcItem not esxited ");
    }

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ptcItem.component);

    let viewContainerRef = this.ptcItemDirective.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }


}
