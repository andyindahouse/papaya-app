import { Component, Input } from '@angular/core';
import { Monument } from '../shared/models/monument';

@Component({
  selector: 'detail-monument',
  template: `
    <StackLayout>
      <Image src="{{monument.image}}"></Image>
      <Label class="primary-label" [text]="monument.name"></Label>
      <Label class="secondary-label" text="distance:"></Label>
      <Label class="secondary-label" [text]="monument.distance"></Label>      
      <Label class="primary-label" [text]="monument.status"></Label>      
      <Label class="primary-label" textWrap="true" [text]="monument.desc"></Label>
      <Label class="" *ngIf="monument.distance > 20" textWrap="true" [text]="msgDistance"></Label>
      <Button 
        isEnabled="{{monument.distance <= 20}}"
        text="¡Empieza la actividad!" 
        [nsRouterLink]="['./quiz']" 
        pageTransition="flip">
      </Button>					
    </StackLayout>
  `
})

export class DetailMonumentComponent {
  @Input() monument: Monument;

  constructor() {}
  
  get msgDistance() {
    return `Acercate un poco más al monumento, estás a ${this.monument.distance}m necesitas estar a menos de 20m para empezar la actividad. ¡Tu puedes!`;
  }

}