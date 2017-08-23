// import { createSelector } from 'reselect';
import { User } from '../models/user';
import { Achievement } from '../models/achievement';
import { Action } from '@ngrx/store';

export interface State {
  name: string;
  achievements:Achievement[];
  idMonumentsVisited: string[]
};

export const initialState: State = {
  name: 'Papayo',  
  achievements: [],
  idMonumentsVisited: []
};

export const USER_SET_NAME =          '[User] Set name';
export const USER_LOAD =              '[User] Load';
export const USER_LOAD_COMPLETE =     '[User] Load complete';
export const USER_ADD_ACHIEVEMENT =   '[User] Add achievement';
export const USER_ADD_MONUMENT =      '[User] Add monument';


export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case USER_SET_NAME: {
      return { 
        ...state, 
        name: action.payload 
      };
    }
    case USER_LOAD_COMPLETE: {
      const user = action.payload;
      return {
         name: user.name,
         achievements: [ ...user.achievements ],
         idMonumentsVisited: [ ...user.idMonumentsVisited ]
      };
    }
    case USER_LOAD: {
      return state;
    }
    case USER_ADD_ACHIEVEMENT: {
      return {
        ...state,
        achievements: [ ...state.achievements, action.payload ]
      };
    }
    case USER_ADD_MONUMENT: {
      return {
        ...state,
        idMonumentsVisited: [...state.idMonumentsVisited, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getName = (state: State) => state.name;

export const getAchievements = (state: State) => state.achievements;

// export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
//   return entities[selectedId];
// });

// export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
//   return ids.map(id => entities[id]);
// });
