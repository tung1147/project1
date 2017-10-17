/**
 * Created by Admin on 10/11/2017.
 */
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {
  private role: string = "admin";
  roleChange: Subject<string> = new Subject<string>();

  setRole(role) {
    this.role = role;
    console.log("this.roleChange.", this.roleChange);
    this.roleChange.next(this.role);
  }

  getRole() {
    return this.role;
  }

  getUser() {
    return [
      new User("aguero","admin"),
      new User("sheva","user"),
      new User("torres","user")
    ];
  }
}


class User {
  constructor (
    username : string,
    role : string
  ){}
}
