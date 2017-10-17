/**
 * Created by Admin on 10/17/2017.
 */

const prefix = "historyTransfer/";
export const REQUEST_ITEMS = prefix + 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = prefix + 'RECEIVE_ITEMS';
export const REFRESH_HISTORY = prefix + 'REFRESH_HISTORY';

function requestPosts() {
  return {
    type: REQUEST_ITEMS
  }
}
function receivePosts(data) {
  return {
    type: RECEIVE_ITEMS,
    ...data
  }
}

export function fetchPosts(params) {

  return function (dispatch) {
    dispatch(requestPosts());
    setTimeout(()=>{
      dispatch(receivePosts({}));
    },1000);

  }
}

export function refreshHistoryTranfer(params) {
  return {
    type: REFRESH_HISTORY,
  }
}
