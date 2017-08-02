import { Action } from '@ngrx/store';

export function reducer(state, action: Action) {
  console.log('>>>>>> ACTION: ' + action.type, '>>>>>> PAYLOAD: ' + action.payload);
  return state;
}
