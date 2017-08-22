import { createSelector } from 'reselect';
import { Monument } from '../models/monument';
import { Achievement } from '../models/achievement';
import { Action } from '@ngrx/store';

export interface State {
  monuments: Monument[],
  selectedMonumentId: string;
};

export const initialState: State = {
  monuments: [],
  selectedMonumentId: null
};

export const MONUMENTS_UPDATE =          '[Monuments] Update';
export const MONUMENTS_LOAD_COMPLETE =   '[Monuments] Load complete';
export const MONUMENTS_SELECT =          '[Monuments] Select';
export const MONUMENTS_UPDATE_DISTANCE = '[Monuments] Update distance';



export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case MONUMENTS_UPDATE: {
      const monuments = action.payload;
      return {
        ...state,
        monuments: [...monuments]
      };
    }
    case MONUMENTS_SELECT: {
      return {
        ...state,
        selectedMonumentId: action.payload
      };
    }
    case MONUMENTS_UPDATE_DISTANCE: {
      // Maybe this is better to do it for array of monuments... :\    
      const monument = state.monuments.find(e => e.id === action.payload.id);
      const indexMonument = state.monuments.indexOf(monument);
      state.monuments.splice(indexMonument, 1);
      const newMonument = {
        ...monument,
        distance: action.payload.distance
      };
      return {
        ...state,
        monuments: [...state.monuments, newMonument]
      }
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

export const getMonuments = (state: State) => state.monuments;
export const getSelectedMonumentId = (state: State) => state.selectedMonumentId;
export const getSelected = createSelector(getMonuments, getSelectedMonumentId, (monuments, selectedId) => {
  return monuments.find(e => e.id === selectedId);
});


// export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
//   return entities[selectedId];
// });

// export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
//   return ids.map(id => entities[id]);
// });
