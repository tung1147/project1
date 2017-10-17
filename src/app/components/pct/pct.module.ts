/**
 * Created by Admin on 10/10/2017.
 */
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {PctComponent} from './pct.component';
import {StatusBarComponent} from './statusBar/statusBar.component';
import {MenuItemComponent} from './menu/menu-item.component';
import {MenuComponent} from './menu/menu.component';
import {PCTHeaderComponent} from './header/header.component'

import {DemandPlanningComponent} from './component/demandPlanning/demandPlanning.component';
import {ECOSummaryComponent} from './component/ECOSummary/ECOSummary.component';
import {GroupSummaryComponent} from './component/groupSummary/groupSummary.component';
import {NotesDocsComponent} from './component/notesDocs/notesDocs.component';
import {PartAttributeComponent} from './component/partAttribute/partAttribute.component';
import {PartDispositionComponent} from './component/partDisposition/partDisposition.component';
import {PCASummaryComponent} from './component/PCASummary/PCASummary.component';
import {ProcurementComponent} from './component/procurement/procurement.component';
import {ServiceImpactComponent} from './component/serviceImpact/serviceImpact.component';
import {ServiceParentChildComponent} from './component/serviceParentChild/serviceParentChild.component';
import {ServicePricingComponent} from './component/servicePricing/servicePricing.component';

import {SelectUserComponent} from "./selectUser/selectUser.component"

import {PTCItemDirective} from  './component/ptcItem.directive';
import {PTCItemService} from './ptcItem.service';
import {RoleService} from './services/role.service';
import {UserService} from './services/user.service';
import {PTCNumbersService} from './services/pctNumbers.service';


@NgModule({
  declarations: [
    PctComponent,
    StatusBarComponent,
    MenuItemComponent,
    MenuComponent,
    PCTHeaderComponent,

    PTCItemDirective,
    DemandPlanningComponent,
    ECOSummaryComponent,
    GroupSummaryComponent,
    NotesDocsComponent,
    PartAttributeComponent,
    PartDispositionComponent,
    PCASummaryComponent,
    ProcurementComponent,
    ServiceImpactComponent,
    ServiceParentChildComponent,
    ServicePricingComponent,

    SelectUserComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PTCItemService,
    RoleService,
    UserService,
    PTCNumbersService
  ],
  exports: [PctComponent],

  entryComponents: [DemandPlanningComponent,
    ECOSummaryComponent,
    GroupSummaryComponent,
    NotesDocsComponent,
    PartAttributeComponent,
    PartDispositionComponent,
    PCASummaryComponent,
    ProcurementComponent,
    ServiceImpactComponent,
    ServiceParentChildComponent,
    ServicePricingComponent],
  bootstrap: [PctComponent]
})
export class PCTModule {
}

