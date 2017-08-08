import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RouterExtensions } from "nativescript-angular/router";


import * as fromRoot from '../shared/reducers';
import { MONUMENTS_SELECT } from '../shared/reducers/monuments';
import { Monument } from '../shared/models/monument';

@Component({
	selector: 'pay-monuments',
	styles: [`
		ListView {
			height: 100%;
		}
		Label {
			margin: 10;
		}
		.primary-label {
			color: #000000;
		}
		.secondary-label {
			
		}
	`],
	template: `
		<ActionBar title="Lista de Monumentos"></ActionBar>
		<side-drawer-page>
			<StackLayout height="100%">			
				<ListView
					 	(itemTap)="onMonumentTap($event)"
						[items]="monuments$ | async">
					<ng-template let-monument="item">
						<StackLayout>
								<Image src="{{monument.image}}"></Image>
								<Label class="primary-label" [text]="monument.name"></Label>
								<Label class="secondary-label" text="distance: 956m"></Label>								
						</StackLayout>
					</ng-template>
				</ListView>
			</StackLayout>
		</side-drawer-page>
	`
})
export class MonumentsListComponent implements OnInit {
	monuments$: Observable<Array<Monument>>;

	constructor(private store: Store<fromRoot.State>, private routerExtensions: RouterExtensions) {
		this.monuments$ = store.select(fromRoot.getMonumentsValues);
	}

	ngOnInit() {
		console.log(this.monuments$);
	}

	onMonumentTap(args) {
		this.routerExtensions.navigate(['/monuments', args.index]);
		this.store.dispatch({ type: MONUMENTS_SELECT, payload: args.index })
		console.log("------------------------ ItemTapped: " + args.index);
	}
}