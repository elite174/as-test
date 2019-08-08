import { FilterState, TransferCountNames } from "../const";
import { ITicket } from "../../../../api/typings";

export interface IBaseAction {
    type: string;
    payload?: any;
};

export enum ActionTypes {
    changeFilterState = 'changeFilterState',
    addTickets = 'addTickets',
    setTransferCount = 'setTransferCount'
}

export const changeFilterState = (newState: FilterState): IBaseAction => ({
    type: ActionTypes.changeFilterState,
    payload: newState,
});

export const addTickets = (tickets: ITicket[]): IBaseAction => ({
    type: ActionTypes.addTickets,
    payload: tickets,
});

export const setTransferCount = (transferCountName: TransferCountNames) => ({
    type: ActionTypes.setTransferCount,
    payload: transferCountName,
});