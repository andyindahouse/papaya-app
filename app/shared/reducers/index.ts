import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
// import * as fromRouter from '@ngrx/router-store';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';


/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromUser from './user';
import * as fromMonuments from './monuments';
import * as fromLogMonitor from './log-monitor';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  user: fromUser.State;
  monuments: fromMonuments.State;
  // router: fromRouter.RouterState;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  user: fromUser.reducer,
  monuments: fromMonuments.reducer,
  //logMonitor: fromLogMonitor.reducer
  // router: fromRouter.routerReducer,
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}

export const getUser = (state: State) => state.user;
export const getMonuments = (state: State) => state.monuments;


export const getMonumentsValues = createSelector(getMonuments, fromMonuments.getMonuments);
export const getSelectedMonument = createSelector(getMonuments, fromMonuments.getSelected);
