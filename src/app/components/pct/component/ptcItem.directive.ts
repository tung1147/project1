/**
 * Created by Admin on 10/11/2017.
 */
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ptc-item]',
})
export class PTCItemDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
