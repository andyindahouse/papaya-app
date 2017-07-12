import { Component } from '@angular/core';

@Component({
	selector: 'pay-profile',
	template: `
		<ActionBar title="Perfil"></ActionBar>
		<side-drawer-page>
			<GridLayout class="contact-page p-30">
					<Label
							class="h1 page-text"
							text="Perfil"
							textWrap="true">
					</Label>
			</GridLayout>
		</side-drawer-page>
	`
})
export class ProfileComponent {
    constructor() { }
}