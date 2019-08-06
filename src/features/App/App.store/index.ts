import produce from 'immer';

import { ITicket } from "../../../api/typings";
import { FilterState } from './const';
import { IBaseAction, ActionTypes } from './actions';


export interface IStore {
  tickets: ITicket[];
  filterState: FilterState;
};

export const initialState: IStore = {
  tickets: [],
  filterState: FilterState.cheap
};

export const reducer = (state: IStore, action: IBaseAction) => produce(state, draft => {
  switch (action.type) {
    case ActionTypes.changeFilterState:
      if (state.filterState !== action.payload) {
        draft.filterState = action.payload;
      }

      return draft;
  }
});