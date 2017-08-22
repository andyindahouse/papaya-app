import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../shared/reducers';
import { 
  USER_LOAD_COMPLETE, 
  USER_SET_NAME, 
  USER_ADD_ACHIEVEMENT,
  USER_ADD_MONUMENT
} from '../shared/reducers/user';
import { UserDAO } from './user.dao';
import { Achievement } from './models/achievement';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class UserService {

  name: string;
  achievements: Achievement[];
  idMonumentsVisited: string[];

  constructor(private userDAO: UserDAO, private store: Store<fromRoot.State>) {
    this.name = '';
    this.achievements = [];
    this.idMonumentsVisited = [];
  }
  
  get(): Observable<boolean> {
    return Observable
            .fromPromise(this.userDAO.read())
            .switchMap(res => {              
              if(res) {
                const user = JSON.parse(res);
                this.name = user.name;
                this.achievements = user.achievements;
                this.idMonumentsVisited = user.idMonumentsVisited;
                this.store.dispatch({ type: USER_LOAD_COMPLETE, payload: user })
                return Observable.of(true);
              }              
              return Observable.of(false);                                            
            });
  }
  
  setName(userName) {
    this.name = userName;
    this.store.dispatch({ type: USER_SET_NAME, payload: userName });
    this.writeUser();   
  }

  addAchievement(achievement: Achievement) {
    this.achievements.push(achievement);
    this.store.dispatch({ type: USER_ADD_ACHIEVEMENT, payload: achievement });
    this.writeUser();       
  }

  addMonumentVisited(idMonument) {
    this.idMonumentsVisited.push(idMonument);
    this.store.dispatch({ type: USER_ADD_MONUMENT, payload: idMonument });        
    this.writeUser();
  }

  writeUser() {     
    this.userDAO.write(JSON.stringify({
      name: this.name,
      achievements: this.achievements,
      idMonumentsVisited: this.idMonumentsVisited
    }));
  }

}