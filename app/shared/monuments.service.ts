import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store'; 
import * as fromRoot from './reducers';
import firebase = require('nativescript-plugin-firebase');
import { MONUMENTS_UPDATE } from './reducers/monuments';

@Injectable()
export class MonumentsService {

  monumentsPath: string = '/monuments';

  constructor(private store: Store<fromRoot.State>, private ngZone: NgZone) { }

  syncMonuments() {
    firebase.addValueEventListener(({ value: dataMonuments }) => {
      if(dataMonuments) {
        const monuments = Object.keys(dataMonuments).map((idMonument) => {
          return {
            ...dataMonuments[idMonument],
            id: idMonument
          }
        });
        this.ngZone.run(() => {
          if(monuments && monuments.length > 0) {
            this.store.dispatch({ type: MONUMENTS_UPDATE, payload: monuments });
          }
        });
      }
    }, this.monumentsPath);
  }

}

