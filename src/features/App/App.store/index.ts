import produce from 'immer';

import { ITicket } from "../../../api/typings";
import { FilterState, TransferCountsNames, TransferCounts, initialTransferCounts } from './const';
import { IBaseAction, ActionTypes } from './actions';

export interface IStore {
  /** Список билетов */
  tickets: ITicket[];
  /** Метод сортировки билетов */
  sortBy: FilterState;
  /** Выбранные фильтры пересадок */
  transferCounts: Record<TransferCountsNames, boolean>,
  /** Массив значений выбранных пересадок */
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
    case ActionTypes.addTickets:
      draft.tickets = [...draft.tickets, ...action.payload];
      return draft;

    case ActionTypes.setTransferCount:
      /** Если выбрали "Все", то обнуляем остальные чекбоксы */
      if (action.payload === TransferCountsNames.all) {
        draft.transferCounts = initialTransferCounts
        draft.transferCountsValues = [TransferCounts.all];

        return draft;
      }

      draft.transferCounts[action.payload as TransferCountsNames] = !draft.transferCounts[action.payload as TransferCountsNames];
      const newTransferCountsValues= [];

      if (draft.transferCounts[action.payload as TransferCountsNames]) {
        draft.transferCounts[TransferCountsNames.all] = false;
      }

      /** Формируем новый список значений фильтра пересадок */
      for (const key in draft.transferCounts) {
        if (draft.transferCounts[key as TransferCountsNames]) {
          newTransferCountsValues.push(TransferCounts[key as TransferCountsNames]);
        }
      }

      /** Если список пустой, то нужно выбрать вариант "Все" */
      if (newTransferCountsValues.length === 0) {
        newTransferCountsValues.push(TransferCounts.all);
        draft.transferCounts[TransferCountsNames.all] = true;
      }

      draft.transferCountsValues = newTransferCountsValues;
      return draft;

    default:
      return state;
  }
});