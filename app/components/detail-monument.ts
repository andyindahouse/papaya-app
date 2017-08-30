import { Component, Input, OnInit } from '@angular/core';
import { Monument } from '../shared/models/monument';
import { User } from '../shared/models/user';
import { ROOT_NAME } from '../app.component';

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
      text-align: none;
    }

    .info-label {
      color: #FF4F19;
    }

    .achievement-label {
			font-size: 12;      
      color: #00ABFF;
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
        <Label class="achievement-label" textWrap="true" [text]="msgAchievement"></Label>                    
        <Label class="description-label" horizontalAlignment="center" textWrap="true" [text]="monument.desc"></Label>
        <Label class="info-label" *ngIf="(!monument.distance || monument.distance > 20) &&  user.name !== rootName" textWrap="true" [text]="msgDistance"></Label>
        <Label textWrap="true" *ngIf="user.name === rootName" class="achievement-label" text="Modo Don Quijote desbloqueado, puedes acceder a la actividad"></Label>
        <Button 
          class="button"
          isEnabled="{{(!monument.distance && monument.distance <= 20) || user.name === rootName}}"
          text="¡Empieza la actividad!" 
          [nsRouterLink]="['./quiz']" 
          pageTransition="flip">
        </Button>
      </StackLayout>      					
    </StackLayout>
    `
  })      
export class DetailMonumentComponent implements OnInit {
  @Input() monument: Monument;
  @Input() user: User;
  rootName;

  constructor() {}
  
  ngOnInit() {
    this.rootName = ROOT_NAME;
  }

  get msgDistance() {
    return `Acercate un poco más al punto de interés. Recuerda que necesitas estar a menos de 20 metros para poder empezar la actividad.`;
  }

  get labelDistance() {
    return `A ${this.monument.distance} metros`;
  }

  get msgAchievement() {
    return `Con esta actividad ganarás el logro: ${this.monument.quizAchievement}`;
  }
}
