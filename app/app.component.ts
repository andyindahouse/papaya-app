import { Component, OnInit } from "@angular/core";
import * as dialogs from "ui/dialogs";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import * as fromRoot from './shared/reducers';
import { USER_SET_NAME } from './shared/reducers/user';
import { MonumentsService } from './shared/monuments.service';
import { UserService } from './shared/user.service';

export const ROOT_NAME = 'Don Quijote';

@Component({
  selector: "my-app",
  template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>, 
    private monumentsService: MonumentsService,
    private userService: UserService,    
  ) {}
  
  ngOnInit() {
    this.monumentsService.syncMonuments();
    this.userService.get()
      .subscribe(existsUser => {
        if(!existsUser) {
          dialogs.prompt({
              title: '¡Hola! Bienvenido a Papaya app',
              message: '¿Cómo quieres que te llame?',
              defaultText: 'Papayito',
              okButtonText: 'Aceptar',
              cancelButtonText: 'Más tarde'
            })
            .then(r => {
              if(r.result) {
                const name = r.text ? r.text : 'Unnamed';
                if(name === ROOT_NAME){
                  this.isRoot();                                    
                }
                this.userService.setName(name);
              }
            });
        }
      });
  }

  isRoot() {
    dialogs.alert({
      title: '¡Enhorabuena!',
      message: `Has desbloqueado el modo 'Don Quijote', ahora podrás acceder a las actividades desde cualquier sitio.`
    })
  }
}
