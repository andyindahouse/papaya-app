import { Component } from '@angular/core';
import { PageRoute } from "nativescript-angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/switchMap";

import * as fromRoot from '../shared/reducers';
import { Monument } from '../shared/models/monument'

@Component({
  selector: 'detail-monument-page',
  template: `
    <ActionBar title="{{(monument$ | async).name}}"></ActionBar>
    <side-drawer-page>
      <StackLayout>
        <detail-monument [monument]="monument$ | async"></detail-monument>
        <Button text="¡Empieza la actividad!" [nsRouterLink]="['']" pageTransition="flip"></Button>
      </StackLayout>
    </side-drawer-page>
  `
})

export class DetailMonumentPageComponent {
  monument$: Observable<Monument>;

  constructor(private store: Store<fromRoot.State>) { 
    this.monument$ = this.store.select(fromRoot.getSelectedMonument);
   }  
}