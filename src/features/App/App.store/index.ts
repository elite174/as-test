import produce from 'immer';

import { ITicket } from "../../../api/typings";
import { FilterState, TransferCount } from './const';
import { IBaseAction, ActionTypes } from './actions';

export interface IStore {
  tickets: ITicket[];
  sortBy: FilterState;
  transferCounts: TransferCount[]
};

export const initialState: IStore = {
  tickets: [],
  sortBy: FilterState.cheap,
  transferCounts: [TransferCount.all]
};

export const reducer = (state: IStore, action: IBaseAction) => produce(state, draft => {
  switch (action.type) {
    case ActionTypes.changeFilterState:
      if (state.sortBy !== action.payload) {
        draft.sortBy = action.payload;
      }

      return draft;

    case ActionTypes.addTickets:
      draft.tickets = [...draft.tickets, ...action.payload];
      return draft;

    default:
      return state;
  }
});