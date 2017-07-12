import { Component } from '@angular/core';

@Component({
	selector: 'pay-feedback',
	template: `
		<ActionBar title="Feedback"></ActionBar>
		<side-drawer-page>
			<GridLayout class="contact-page p-30">
					<Label
							class="h1 page-text"
							text="Feedback"
							textWrap="true">
					</Label>
			</GridLayout>
		</side-drawer-page>
	`
})
export class FeedbackComponent {
    constructor() { }
}