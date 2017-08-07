import { Action } from '@ngrx/store';

export function reducer(state, action: Action) {
  console.log('>>>>>> ACTION: ' + action.type, '>>>>>> PAYLOAD: ' + JSON.stringify(action.payload));
  return state;
}
