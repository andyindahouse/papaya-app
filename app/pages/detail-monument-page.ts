import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../shared/reducers';
import { Monument } from '../shared/models/monument'

@Component({
  selector: 'detail-monument-page',
  template: `
    <ActionBar title="{{(monument$ | async).name}}"></ActionBar>
    <side-drawer-page>
    <ScrollView>
      <StackLayout>
        <detail-monument [monument]="monument$ | async"></detail-monument>
      </StackLayout>
    </ScrollView>
    </side-drawer-page>
  `
})

export class DetailMonumentPageComponent {
  monument$: Observable<Monument>;

  constructor(private store: Store<fromRoot.State>) { 
    this.monument$ = this.store.select(fromRoot.getSelectedMonument);
   }  
}