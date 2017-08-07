import { Component, OnInit } from '@angular/core';
import firebase = require('nativescript-plugin-firebase');
import { monuments } from '../shared/load-monuments';


@Component({
  selector: 'pay-load-monu',
  template: `
    <ActionBar title="Perfil"></ActionBar>
		<side-drawer-page>
			<GridLayout>
					<Label
							class="h1 page-text"
							text="Load Monuments"
							textWrap="true">
          </Label>
          <Button class="btn btn-primary btn-active" id="button" text="Tap me!" (tap)="onTap($event)"></Button>
			</GridLayout>
		</side-drawer-page>
  `
})

export class LoadMonuComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  onTap() {
    firebase.setValue(
      "/monuments",
      monuments
    ).then(
      function (result: any) {
        return 'Monuments added to your wishlist!';
      },
      function (errorMessage: any) {
        console.log(errorMessage);
      }); 



  }
}