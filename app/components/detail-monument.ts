import { Component, Input } from '@angular/core';
import { Monument } from '../shared/models/monument';

@Component({
  selector: 'detail-monument',
  styles: [`
    
    .main-layout {
    }
    
    .secondary-layout {
      padding: 10;
    }

    .primary-label {
      margin-top: 15;      
      color: black;
			font-size: 17;
			font-weight: 500;
    }

    .secondary-label {
			font-size: 12;
  		color: #777;
    }
    
    .description-label {
      margin-top: 15;
      margin-bottom: 15;      
      font-size: 14;
    }

    .info-label {
      color: #FF4F19;
    }

    .button {
      background-color: #00ABFF;
      color: white;
    }

    .button[isEnabled="false"] {
      background-color: #00ABFF;
      color: white;
      opacity: .3;
    }

  `],
  template: `
    <StackLayout class="main-layout">
      <Image src="{{monument.image}}"></Image>
      <StackLayout class="secondary-layout">      
      <Label class="primary-label" [text]="monument.name"></Label>
      <Label class="secondary-label" [text]="labelDistance"></Label>    
      <Label class="description-label" textWrap="true" [text]="monument.desc"></Label>
      <Label class="info-label" *ngIf="monument.distance > 20" textWrap="true" [text]="msgDistance"></Label>
      <Button 
        class="button"
        text="¡Empieza la actividad!" 
        [nsRouterLink]="['./quiz']" 
        pageTransition="flip">
        </Button>
        </StackLayout>      					
        </StackLayout>
        `
      })
      
      export class DetailMonumentComponent {
        @Input() monument: Monument;
        
        // isEnabled="{{monument.distance <= 20}}"
  constructor() {}
  
  get msgDistance() {
    return `Acercate un poco más al punto de interes, necesitas estar a menos de 20 metros para poder empezar la actividad`;
  }

  get labelDistance() {
    return `A ${this.monument.distance} metros`;
  }
}
