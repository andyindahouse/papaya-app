import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable  } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "ui/dialogs";
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


import * as fromRoot from '../shared/reducers';
import { UserService } from '../shared/user.service';
import { Monument } from '../shared/models/monument'

@Component({
  selector: 'detail-monument-page',
  styles: [`
    Label {
      background-color: red;
    }
  `],
  template: `
    <ActionBar *ngIf="!this.win" title="Tienes {{timer$ | async}}seg para resolverlo"></ActionBar>
    <ActionBar *ngIf="this.win" title="¡Reto superado!"></ActionBar>    
    <side-drawer-page>
    <StackLayout height="100%">
      <quiz 
        [quiz]="monument.quiz" 
        (setAchievement)="setAchievement()">
      </quiz>
		</StackLayout>
    </side-drawer-page>
  `
})
export class QuizPageComponent implements OnInit{
  monument: Monument;
  timer$: Observable<number>;
  subscription: Subscription;
  win;
  
  constructor(
    private store: Store<fromRoot.State>, 
    private routerExtensions: RouterExtensions,
    private userService: UserService
  ) {
    this.win = false;
  }

  ngOnInit() {
    this.getMonumentSelected();
    const start = 30;
    this.timer$ = Observable
      .timer(1000,1000)
      .map(i => start - i)
      .take(start + 1);

      this.subscription = this.timer$.subscribe(null, null, () => {
        dialogs.alert({
          title: 'Fin del juego',
          message: `Lo siento se te ha pasado el tiempo, vuelve a intentarlo`
        }).then(e => this.goBack());
      });
  }

  getMonumentSelected() {
    this.store.select(fromRoot.getSelectedMonument)
      .subscribe(e => {
        this.monument = e;        
      });
  }

  setAchievement() {
    this.subscription.unsubscribe();
    this.win = true;
    dialogs.alert({
      title: '¡Enhorabuena!, Logro conseguido',
      message: `Ahora dispones del logro "${this.monument.quizAchievement}" en tu perfil y se te mostrará en el mapa como conseguido`
    }).then(e => this.goBack());
    this.userService.addAchievement({
      id: this.monument.id,
      name: this.monument.quizAchievement,
      image: 'res://medal'
    });
  }

  goBack() {
    this.routerExtensions.back();
  }

}