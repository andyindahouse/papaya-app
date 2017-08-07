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
    firebase.addValueEventListener((res) => {
      this.ngZone.run(() => {
        this.store.dispatch({ type: MONUMENTS_UPDATE, payload: res.value });
      });
    }, this.monumentsPath);
  }

}

