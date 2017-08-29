import { Component } from '@angular/core';
import * as dialogs from "ui/dialogs";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TextField } from "tns-core-modules/ui/text-field"
import { FlexboxLayout } from "tns-core-modules/ui/layouts/flexbox-layout";

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

		.name-layout {
			height: 10%;
			background-color: green;
			text-align: center;
			justify-content: center;
			align-items: center;
		}

		.medals-layout {
			width: 100%;
		}

		.items-layout {
			width: 30%;
			flex-direction: column;
			align-items: center;
			justify-content: center;	
			background-color: yellow;			
		}
		
		.name-label {
			color: black;
			font-size: 17;
			font-weight: 500;
			background-color: red;
			height: 20;
		}

	`],
	template: `
		<ActionBar title="Perfil"></ActionBar>
		<side-drawer-page>
			<StackLayout>
				<FlexboxLayout class="name-layout">
					<Label 
						class="name-label" 
						[text]="(user$ | async).name">
					</Label>
					<Image 
						backgroundColor="blue"
						(tap)="editUserName()"	
						src="res://ic_mode_edit_black_36dp" 
						stretch="none">
					</Image>
				</FlexboxLayout>
				<StackLayout>
					<Label 
						*ngIf="!(user$ | async).achievements" 
						class="primary-label" 
						text="Oh vaya, no tienes nigún logro...">
					</Label>			
					<Label 
						*ngIf="!(user$ | async).achievements" 
						text="Completa los desafíos de los monumentos para desbloquear logros">
					</Label>
				</StackLayout>
				<GridLayout class="medals-layout" columns="30, 30, 30" rows="auto, *" >					
					<ListView
						backgroundColor="pink"
						[items]="(user$ | async).achievements">
						<ng-template let-achievement="item">
							<FlexboxLayout class="item-layout">
								<Image src="{{achievement.image}}" stretch="none"></Image>
								<Label class="primary-label" [text]="achievement.name"></Label>
							</FlexboxLayout>
						</ng-template>
					</ListView>
				</GridLayout>
			</StackLayout>
		</side-drawer-page>
	`
})
export class ProfileComponent {
	
	user$: Observable<User>;
	
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