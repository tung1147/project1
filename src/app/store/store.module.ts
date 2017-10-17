/**
 * Created by Admin on 10/17/2017.
 */
import {NgModule} from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import {NgReduxRouterModule, NgReduxRouter} from '@angular-redux/router';

// Redux ecosystem stuff.
import {createLogger} from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import {rootReducer} from './reducers';

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule],
  providers: [],
})
export class StoreModule {
  constructor(public store: NgRedux<any>) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    // store.configureStore(rootReducer);

    // Enable syncing of Angular router state with our Redux store.
  }
}
