// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/skip';
// import 'rxjs/add/operator/takeUntil';
// import { Injectable } from '@angular/core';
// import { Effect, Actions, toPayload } from '@ngrx/effects';
// import { Action } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// import { empty } from 'rxjs/observable/empty';
// import { of } from 'rxjs/observable/of';

// import firebase = require('nativescript-plugin-firebase');
// import { MONUMENTS_LOAD, MONUMENTS_LOAD_COMPLETE } from '../reducers/monuments';

// @Injectable()
// export class MonumentsEffects {

//   @Effect()
//   search$: Observable<Action> = this.actions$
//     .ofType(MONUMENTS_LOAD)
//     .switchMap(query => {
//       if (query === '') {
//         return empty();
//       }

//       firebase.addValueEventListener((e) => {
//         console.log('query', JSON.stringify(e));
//       }, '/monuments');
//       firebase.adde

//       return this.googleBooks.searchBooks(query)
//         .map(books => ({ type: MONUMENTS_LOAD_COMPLETE, payload:  }))
//         .catch(() => of({ type: MONUMENTS_LOAD_COMPLETE, payload:  }));
//     });

//   constructor(private actions$: Actions, private googleBooks: GoogleBooksService) { }
// }
