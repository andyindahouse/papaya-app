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
  logMonitor: fromLogMonitor.reducer
  // router: fromRouter.routerReducer,
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}

export const getUser = (state: State) => state.user;
export const getMonuments = (state: State) => state.monuments;


export const getMonumentsValues = createSelector(getMonuments, fromMonuments.getMonuments);

// /**
//  * A selector function is a map function factory. We pass it parameters and it
//  * returns a function that maps from the larger state tree into a smaller
//  * piece of state. This selector simply selects the `books` state.
//  *
//  * Selectors are used with the `select` operator.
//  *
//  * ```ts
//  * class MyComponent {
//  * 	constructor(state$: Observable<State>) {
//  * 	  this.booksState$ = state$.select(getBooksState);
//  * 	}
//  * }
//  * ```
//  */
// export const getBooksState = (state: State) => state.books;

// /**
//  * Every reducer module exports selector functions, however child reducers
//  * have no knowledge of the overall state tree. To make them useable, we
//  * need to make new selectors that wrap them.
//  *
//  * The createSelector function from the reselect library creates
//  * very efficient selectors that are memoized and only recompute when arguments change.
//  * The created selectors can also be composed together to select different
//  * pieces of state.
//  */
//  export const getBookEntities = createSelector(getBooksState, fromQuestionary.getEntities);
//  export const getBookIds = createSelector(getBooksState, fromQuestionary.getIds);
//  export const getSelectedBookId = createSelector(getBooksState, fromQuestionary.getSelectedId);
//  export const getSelectedBook = createSelector(getBooksState, fromQuestionary.getSelected);


// /**
//  * Just like with the books selectors, we also have to compose the search
//  * reducer's and collection reducer's selectors.
//  */
// export const getSearchState = (state: State) => state.search;

// export const getSearchBookIds = createSelector(getSearchState, fromUser.getIds);
// export const getSearchQuery = createSelector(getSearchState, fromUser.getQuery);
// export const getSearchLoading = createSelector(getSearchState, fromUser.getLoading);


// /**
//  * Some selector functions create joins across parts of state. This selector
//  * composes the search result IDs to return an array of books in the store.
//  */
// export const getSearchResults = createSelector(getBookEntities, getSearchBookIds, (books, searchIds) => {
//   return searchIds.map(id => books[id]);
// });



// export const getCollectionState = (state: State) => state.collection;

// export const getCollectionLoaded = createSelector(getCollectionState, fromMonuments.getLoaded);
// export const getCollectionLoading = createSelector(getCollectionState, fromMonuments.getLoading);
// export const getCollectionBookIds = createSelector(getCollectionState, fromMonuments.getIds);

// export const getBookCollection = createSelector(getBookEntities, getCollectionBookIds, (entities, ids) => {
//   return ids.map(id => entities[id]);
// });

// export const isSelectedBookInCollection = createSelector(getCollectionBookIds, getSelectedBookId, (ids, selected) => {
//   return ids.indexOf(selected) > -1;
// });

// /**
//  * Layout Reducers
//  */
// export const getLayoutState = (state: State) => state.layout;

// export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
