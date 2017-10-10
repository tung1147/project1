/**
 * Created by admin on 10/10/17.
 */
/**
 * Created by admin on 10/10/17.
 */
import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  styleUrls: ['./menu.component.less'],
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
  @Input() title: any = "";
}
