/**
 * Created by Admin on 10/11/2017.
 */
import {Injectable} from '@angular/core';

import {PTCItemComponent} from './component/ptcItem.component';

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

@Injectable()
export class PTCItemService {
  getItem() {
    return [
      new PTCItemComponent(DemandPlanningComponent, 'DemandPlanningComponent'),
      new PTCItemComponent(ECOSummaryComponent, 'ECOSummaryComponent'),
      new PTCItemComponent(GroupSummaryComponent, 'GroupSummaryComponent'),
      new PTCItemComponent(NotesDocsComponent, 'NotesDocsComponent'),
      new PTCItemComponent(PartAttributeComponent, 'PartAttributeComponent'),
      new PTCItemComponent(PartDispositionComponent, 'PartDispositionComponent'),
      new PTCItemComponent(PCASummaryComponent, 'PCASummaryComponent'),
      new PTCItemComponent(ProcurementComponent, 'ProcurementComponent'),
      new PTCItemComponent(ServiceImpactComponent, 'ServiceImpactComponent'),
      new PTCItemComponent(ServiceParentChildComponent, 'ServiceParentChildComponent'),
      new PTCItemComponent(ServicePricingComponent, 'ServicePricingComponent')
    ];
  }
}
