import { Injectable, NgZone } from "@angular/core";
import { StateFS } from './state';
import { actions } from './actions'

export interface State {
  user?: string,
  monuments?: Object[],
  achievements?: string[]
}

export interface Action {
  type?: string
  payload: any
}

export const initialState: State = {
  user: 'Papayo',
  monuments: [],
  achievements: []
};

@Injectable()
export class StateService {
    
    state: State;

    constructor(private zone: NgZone, private stateDAO: StateFS){}

    init(){
      this.stateDAO.read()
        .then(res => {
            console.log('res', res);
            if(res) {
              this.state = JSON.parse(res);
            } else {
              this.state = initialState
            }
        })
        .catch(err => console.log(err))          
    }

    dispatch(action) {
      this.state = this.reducers(this.state, action);
      this.stateDAO.write(JSON.stringify(this.state));
    }

    reducers(state, action: Action): State {
      switch (action.type) {
        case actions.SET_USER:             
          return {...state, user: action.payload};
        case actions.SET_ACHIEVEMENTS:
          return {...state, achievements: [...state.achievements, action.payload]}
        default: {
          return state;
        }
      }
    }

    getState() {
      return this.state;
    }
}