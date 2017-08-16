import { Component } from '@angular/core';
import * as dialogs from "ui/dialogs";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TextField } from "tns-core-modules/ui/text-field"

import * as fromRoot from '../shared/reducers';
import { User } from '../shared/models/user';
import { UserService } from '../shared/user.service';
import { Achievement } from '../shared/models/achievement';
import { USER_SET_NAME } from '../shared/reducers/user';

@Component({
	selector: 'pay-profile',
	styles: [`
		ListView {
			height: 100%;
		}
	`],
	template: `
		<ActionBar title="Perfil"></ActionBar>
		<side-drawer-page>
			<StackLayout>
				<Label
          [text]="(user$ | async).name">
      	</Label>
				<Image 
					(tap)="editUserName()"	
					src="res://ic_mode_edit_black_36dp" 
					stretch="none">
				</Image>				
			</StackLayout>
			<Label 
				*ngIf="!(user$ | async).achievements" 
				class="primary-label" 
				text="Oh vaya, no tienes nigún logro...">
			</Label>			
			<Label 
				*ngIf="!(user$ | async).achievements" 
				text="Completa los desafíos de los monumentos para desbloquear logros">
			</Label>
			<ListView
					[items]="(user$ | async).achievements">
				<ng-template let-achievement="item">
					<StackLayout>
							<Image src="{{achievement.image}}" stretch="none"></Image>
							<Label class="primary-label" [text]="achievement.name"></Label>
					</StackLayout>
				</ng-template>
			</ListView>
		</side-drawer-page>
	`
})
export class ProfileComponent {
	
	user$: Observable<User>;
	// achievements$: Observable<Achievement>;
	
	constructor(private store: Store<fromRoot.State>, private userService: UserService) { 
			this.user$ = this.store.select('user');
	}

	editUserName() {
		console.log('tap user');
		dialogs.prompt({
			title: '¡Vamos a cambiar tu nombre!',
			message: 'Elige tu nuevo nombre de usuario',
			okButtonText: 'Aceptar'
		})
		.then(r => {
			if (r.result) {
				const name = r.text ? r.text : 'Unnamed';
				this.userService.setName(name);
			}
		});
 	}
}