import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as dialogs from "ui/dialogs";

import { Question } from '../shared/models/question';


@Component({
  selector: 'quiz',
  styles: [`
    .selected {
      background-color: blue;
    }

    .quiz__toValidate {
      background-color: red;
    }

    .quiz_validate {
      height: 10%;
    }
    
    .quiz_questions {
      height: 90%;
    }
  `],
  template: `
  <StackLayout class="quiz_questions">
    <ListView
        [items]="quiz">
      <ng-template let-item="item" let-i="index">
        <StackLayout>
          <Label textWrap="true" [text]="item.question"></Label>
          <Button
            [class.selected]="iButton === selecteds[i]"
            *ngFor="let response of item.responses; let iButton=index" 
            [text]="response" 
            (tap)="onTap($event, i, iButton)">
          </Button>
        </StackLayout>
      </ng-template>
    </ListView>
  </StackLayout>
  <StackLayout class="quiz_validate">
    <Button
      class="quiz__toValidate"
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
