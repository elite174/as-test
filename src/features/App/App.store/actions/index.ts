import { FilterState } from "../const";

export interface IBaseAction {
    type: string;
    payload?: any;
};

export enum ActionTypes {
    changeFilterState = 'changeFilterState',

}

export const changeFilterState = (newState: FilterState): IBaseAction => ({
    type: ActionTypes.changeFilterState,
    payload: newState,
});