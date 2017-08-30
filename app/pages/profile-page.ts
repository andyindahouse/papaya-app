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
import { ROOT_NAME } from '../app.component';

@Component({
	selector: 'pay-profile',
	styles: [`
		.name-layout {
			height: 15%;
			margin-top: 20;
			text-align: center;
			justify-content: center;
			align-items: center;
		}

		.items-layout {
			height: 85%;
			flex-direction: row;
			align-items: center;			
			flex-wrap: wrap;
		}
		
		.item-layout {
			padding: 25;
			width: 50%;
		}

		.name-label {
			color: black;
			margin-right: 5;
			font-size: 24;
			font-weight: 600;
		}

		.neither-label {
			color: #527992;
			font-size: 16;
			font-weight: 600;
			margin: 25;
		}

		.medal-label {
			color: black;
		}

	`],
	template: `
		<ActionBar title="Perfil y logros"></ActionBar>
		<side-drawer-page>
			<ScrollView>
			<StackLayout>
				<FlexboxLayout class="name-layout">
					<Label
						textWrap="true"
						class="name-label" 
						[text]="(user$ | async).name">
					</Label>
					<Image 
						class="pencil-icon"
						(tap)="editUserName()"	
						src="res://pencil" 
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
					<Label 
						class="neither-label" 
						textWrap="true"
						*ngIf="(user$ | async).achievements.length === 0"
						text="No has conseguido nungún logro todavía">
					</Label>
					<FlexboxLayout class="items-layout">
						<StackLayout 
							*ngFor="let achievement of (user$ | async).achievements" 
							class="item-layout" 
							orientation="vertical">
							<Image horizontalAlignment="center" src="res://academics" stretch="none"></Image>
							<Label horizontalAlignment="center" textWrap="true" class="medal-label" [text]="achievement.name"></Label>
						</StackLayout>
					</FlexboxLayout>
			</StackLayout>
			</ScrollView>
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
			title: 'Editar nombre',
			message: 'Elige tu nuevo nombre de usuario',
			okButtonText: 'Aceptar'
		})
		.then(r => {
			if (r.result) {
				const name = r.text ? r.text : 'Unnamed';
				if(name === ROOT_NAME) this.isRoot();				
				this.userService.setName(name);
			}
		});
	}

	isRoot() {
		dialogs.alert({
			title: '¡Enhorabuena!',
			message: `Has desbloqueado el modo 'Don Quijote', ahora podras acceder a las actividades desde cualquier sitio.`
		});
	}
	 
}