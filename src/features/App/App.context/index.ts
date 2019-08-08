import React from 'react';
import { initialState, IStore } from '../App.store';
import { IBaseAction } from '../App.store/actions';

interface IAppContext {
    store: IStore;
    dispatch: (action: IBaseAction) => void;
};

export const AppContext = React.createContext<IAppContext>({
    store: initialState,
    dispatch: () => { }
});
