import { Component } from '@angular/core';

@Component({
	selector: 'pay-map',
	template: `
		<ActionBar title="Mapa"></ActionBar>
		<side-drawer-page>
			<GridLayout class="contact-page p-30">
					<Label
							class="h1 page-text"
							text="Mapa"
							textWrap="true">
					</Label>
			</GridLayout>
		</side-drawer-page>
	`
})
export class MapComponent {
    constructor() { }
}