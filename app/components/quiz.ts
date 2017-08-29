import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as dialogs from "ui/dialogs";

import { Question } from '../shared/models/question';


@Component({
  selector: 'quiz',
  styles: [`
    .question-label {
      color: white;
      font-size: 16;
      padding: 10;
      background-color: #5C546A;
    }

    .button-validate {
      background-color: #4082FD;
      color: white;
    }

    .button-response {
      background-color: white;
      color: black;
      border-color: transparent;
      border-width: 1;
    }

    .button-response--selected {
      background-color: #00ABFF;
      color: white;
    }

    .layout-validate {
      height: 10%;
    }
    
    .layout-questions {
      height: 90%;
    }
  `],
  template: `
  <StackLayout class="layout-questions">
    <ListView
        [items]="quiz">
      <ng-template let-item="item" let-i="index">
        <StackLayout>
          <Label class="question-label" textWrap="true" [text]="item.question"></Label>
          <Button
            class="button-response"
            [class.button-response--selected]="iButton === selecteds[i]"
            *ngFor="let response of item.responses; let iButton=index" 
            [text]="response" 
            (tap)="onTap($event, i, iButton)">
          </Button>
        </StackLayout>
      </ng-template>
    </ListView>
  </StackLayout>
  <StackLayout class="layout-validate">
    <Button
      class="button-validate"
      text="Validar respuestas" 
      (tap)="validateRes()">
    </Button>
  </StackLayout>
  `
})

export class QuizComponent implements OnInit {
  @Input() quiz: Question[];
  @Output() setAchievement = new EventEmitter();
  selecteds: number[];

  constructor() { }

  ngOnInit() {
    this.selecteds = [];
  }

  onTap($event, i, iButton) {
    this.selecteds[i] = iButton;
  }

  validateRes() {
    if(this.selecteds.length < 5) {
      dialogs.alert({
        title: 'Faltan preguntas por contestar...',
        message: `¡Tienes que contestar todas las preguntas!`
      });
      return;
    }
    let wrongRes = 0;
    this.selecteds.forEach(( selectedIndex, i ) => {
      if(selectedIndex !== this.quiz[i].indexResponseCorrect) {
        wrongRes++;
      }
    });
    if(wrongRes > 0) {
      dialogs.alert({
        title: '¡Error!',
        message: `Lo siento, tienes ${wrongRes} respuestas esquivocadas. Debes acertar todas para conseguir el logro, vuelve a intentarlo`
      });
    } else {
      this.setAchievement.emit();
    }
  }
}
