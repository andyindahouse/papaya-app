import { Component, Input } from '@angular/core';
import { Monument } from '../shared/models/monument';

@Component({
  selector: 'item-list-monument',
  styles: [`
    .item-list__container {
      margin: 10 5;
    }
		.primary-label {
			color: black;
			font-size: 17;
			font-weight: 500;
		}
		.secondary-label {
			font-size: 12;
  		color: #777;
		}
  `],
  template: `
    <StackLayout id="{{monument.id}}">
      <Image src="{{monument.image}}"></Image>
      <StackLayout class="item-list__container">
        <Label class="primary-label" [text]="monument.name"></Label>
        <Label class="secondary-label" [text]="msgDistance"></Label>			
      </StackLayout>
		</StackLayout>
  `
})

export class ItemListMonumentComponent {
  @Input() monument: Monument;

  constructor() { }

  get msgDistance() {
    return `Estás a ${this.monument.distance} metros de este punto de interés`;
  }

}