/**
 * Created by Admin on 10/17/2017.
 */

import {REQUEST_ITEMS, RECEIVE_ITEMS, REFRESH_HISTORY} from './actions';

const initState = {
  items : [],
  total : 0,
  skip : 0,
  isFetching : false
};

export default function receiverItems(state = initState, action) {
  var _return;
  if (action.type === RECEIVE_ITEMS) {
    _return = {
      ...state,
      isFetching : false,
      items : state.items.concat(action.items),
      skip : state.skip + action.items.length,
      total : action.total
    };
    return _return;
  }
  if (action.type === REQUEST_ITEMS) {
    _return = {
      ...state,
      isFetching : true
    };
    return _return;
  }
  if (action.type === REFRESH_HISTORY) {
    return initState;
  }
  return state;
}
