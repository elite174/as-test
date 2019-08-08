import { TransferCountsNames } from "../const";
import { ITicket } from "../../../../api/typings";

export interface IBaseAction {
    type: string;
    payload?: any;
};

/** Типы событий хранилища */
export enum ActionTypes {
    addTickets = 'addTickets',
    setTransferCount = 'setTransferCount'
}

export const addTickets = (tickets: ITicket[]): IBaseAction => ({
    type: ActionTypes.addTickets,
    payload: tickets,
});

export const setTransferCount = (transferCountName: TransferCountsNames) => ({
    type: ActionTypes.setTransferCount,
    payload: transferCountName,
});
