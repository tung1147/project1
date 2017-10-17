/**
 * Created by Admin on 10/11/2017.
 */
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PTCNumbersService {
  private items: Array<PTCItem>;

  constructor(){
    this.items = [
      new PTCItem('1', 'PCT-001231', 'ExteriorC', '1041315-00DEF', 'EXT MIRROR BASE', 'Model S', 'Exteriors', 'ExteriorMirrors', 'Tool Kit', 'ECO-0035', 'Design', 'PCA-001234567', '2017-08-09', '2017-08-09', 'Cindy Huang', 'In-Progress', 'PCT', 'mmorusu', '2017-09-12 15:07:13', 'mmorusu', '2017-09-12 15:07:13', '0', 'mmorusu', '2017-09-12 15:07:13'),
      new PTCItem('2', 'PCT-001232', 'EXTERIOR CHANGE', '11629', 'TOOL, BODYSIDE LH', 'Model S', '10 - BODY', '1001 - Body Panels', 'Body Panels Illustration 1', 'ECO-0035', 'Design', 'PCA-001234567', '2017-08-09', '2017-08-09', 'Cindy Huang', 'In-Progress', 'PCT', 'mmorusu', '2017-09-12 15:11:20', 'mmorusu', '2017-09-12 15:11:20', '0', 'mmorusu', '2017-09-12 15:11:20'),
      new PTCItem('3', 'PCT-001233', 'ExteriorD', '11567', 'Rivet Pop', 'Model X', 'Seats', '1301 Seat Runners', 'Seat Runners', 'ECO-0036', 'Design', 'PCA-001234', '2017-08-05', '2017-08-05', 'Joe', 'In-Progress', 'PCT', 'mmorusu', '2017-09-14 14:59:29', null, null, '0', null, null),
      new PTCItem('4', 'PCT-001234', 'ExteriorD', '11567', 'Rivet Pop', 'Model X', 'Seats', '1301 Seat Runners', 'Seat Runners', 'ECO-0036', 'Design', 'PCA-001234', '2017-08-05', '2017-08-05', 'Joe', 'In-Progress', 'PCT', 'mmorusu', '2017-09-14 14:59:41', null, null, '0', null, null),
      new PTCItem('5', 'PCT-001235', 'ExteriorD', '11567', 'Rivet Pop', 'Model X', 'Seats', '1301 Seat Runners', 'Seat Runners', 'ECO-0036', 'Design', 'PCA-001234', '2017-08-05', '2017-08-05', 'Joe', 'In-Progress', 'PCT', 'mmorusu', '2017-09-14 14:59:53', null, null, '0', null, null),
      new PTCItem('6', 'string', 'ExteriorE', '11630', 'Tool', 'string', 'Body', 'Sill Panels and Windscreen', 'sill Panels', 'ECO-0038', 'Design', 'PCA-001345', '2017-09-25', '2017-09-25', 'Jane', 'In-Progress', 'PCT', 'erp/mmorusu', '2017-09-25 23:41:28', null, null, '0', null, null)
    ]
  }

  getItems() {
    console.log("getItems",this.items);
    return this.items;
  }


}

class PTCItem {
  constructor(ID, Number, Name, PartNumber, PartName, Model, System, SubSystem, Topic, ECONumber, ECOStatus, MCONumber, MBOMStartDate, SvcBOMStartDate, NPIPM, Status, PartStatus, CreatedBy, CreatedTimeStamp, ModifiedBy, ModifiedTimeStamp, IsDeleted, DeletedBy, DeletedTimeStamp) {

  }
}
