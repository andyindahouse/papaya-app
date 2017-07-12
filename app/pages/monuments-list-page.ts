import { Component } from '@angular/core';

@Component({
	selector: 'pay-monuments',
	template: `
		<ActionBar title="Lista de Monumentos"></ActionBar>
		<side-drawer-page>
			<GridLayout class="contact-page p-30">
					<Label
							class="h1 page-text"
							text="Lista de Monumentos"
							textWrap="true">
					</Label>
			</GridLayout>
		</side-drawer-page>
	`
})
export class MonumentsListComponent {
    constructor() { }
}