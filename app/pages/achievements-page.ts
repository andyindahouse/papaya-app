import { Component } from '@angular/core';

@Component({
	selector: 'pay-achievements',
	template: `
		<ActionBar title="Logros"></ActionBar>
		<side-drawer-page>
			<GridLayout class="contact-page p-30">
					<Label
							class="h1 page-text"
							text="Logros"
							textWrap="true">
					</Label>
			</GridLayout>
		</side-drawer-page>
	`
})
export class AchievementsComponent {
    constructor() { }
}