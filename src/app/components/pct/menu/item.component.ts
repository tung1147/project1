/**
 * Created by admin on 10/10/17.
 */
/**
 * Created by admin on 10/10/17.
 */
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  styleUrls: ['./menu.component.less'],
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
  @Input() data: any = {
    name: "",
    children: []
  };

  @Output() onClick = new EventEmitter<any>();

  setActive() {
    if (!this.data) return;
    this.data.active = this.data.active ? false : true;
    if (this.data.children) {
      this.data.children.forEach(element => {
        element.active = false;
      });
      this.data.children[0] && (this.data.children[0].active = true);
    }
    this.onClick.emit(this.data);
  }

  setChildActive(child) {
    if (this.data.children) {
      this.data.children.forEach(element => {
        element.active = false;
      });
      child.active = true;
    }
  }
}
