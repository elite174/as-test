import produce from 'immer';

import { ITicket } from "../../../api/typings";
import { FilterState, TransferCountNames, TransferCounts, initialTransferCounts } from './const';
import { IBaseAction, ActionTypes } from './actions';

export interface IStore {
  tickets: ITicket[];
  sortBy: FilterState;
  transferCounts: Record<TransferCountNames, boolean>,
  transferCountsValues: number[];
};

export const initialState: IStore = {
  tickets: [],
  sortBy: FilterState.cheap,
  transferCounts: initialTransferCounts,
  transferCountsValues: [TransferCounts.all],
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

    case ActionTypes.setTransferCount:
      if (action.payload === TransferCountNames.all) {
        draft.transferCounts = initialTransferCounts
        draft.transferCountsValues = [TransferCounts.all];

        return draft;
      }

      draft.transferCounts[action.payload as TransferCountNames] = !draft.transferCounts[action.payload as TransferCountNames];
      const newTransferCountsValues= [];

      if (draft.transferCounts[action.payload as TransferCountNames]) {
        draft.transferCounts[TransferCountNames.all] = false;
      }


      for (const key in draft.transferCounts) {
        if (draft.transferCounts[key as TransferCountNames]) {
          newTransferCountsValues.push(TransferCounts[key as TransferCountNames]);
        }
      }

      if (newTransferCountsValues.length === 0) {
        newTransferCountsValues.push(TransferCounts.all);
        draft.transferCounts[TransferCountNames.all] = true;
      }

      draft.transferCountsValues = newTransferCountsValues;
      return draft;

    default:
      return state;
  }
});