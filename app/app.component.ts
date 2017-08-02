import { Component, OnInit } from "@angular/core";
import * as dialogs from "ui/dialogs";

import { Store } from '@ngrx/store';
import * as fromRoot from './shared/reducers';
import { USER_SET_NAME } from './shared/reducers/user';

@Component({
  selector: "my-app",
  template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) {}
  
  ngOnInit() {
    dialogs.prompt({
      title: '¡Hola! Bienvenido a Papaya app',
      message: '¿Cómo quieres que te llame?',
      defaultText: 'Papayitiano',
      okButtonText: 'Aceptar',
      cancelButtonText: 'Más tarde'
    })
    .then(r => {
      if(r.result) {
        this.store.dispatch({ type: USER_SET_NAME, payload: r.text });
      }
      console.log("Dialog result: " + r.result + ", text: " + r.text);
    });
  }
}
