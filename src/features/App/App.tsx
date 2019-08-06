import React, { useReducer, useCallback } from 'react';
import { cn } from 'recn';

import { Filter } from '../../components/Filter/Filter';

import './App.scss';
import { reducer, initialState } from './App.store';
import { FilterState } from './App.store/const';
import { changeFilterState } from './App.store/actions';

const cnApp = cn('App');

export const App = React.memo(() => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={cnApp()}>
      <div className={cnApp('Logo')}></div>
      <div className={cnApp('Content')}>
        <div className={cnApp('LeftColumn')}>
          <Filter />
        </div>
        <div className={cnApp('RightColumn')}>
          <div className={cnApp('FilterControl')}>
            <div
              onClick={() => dispatch(changeFilterState(FilterState.cheap))}
              className={cnApp('FilterButton',
                { active: store.filterState === FilterState.cheap }
              )}>
              Самые дешёвый
          </div>
            <div
              onClick={() => dispatch(changeFilterState(FilterState.fast))}
              className={cnApp('FilterButton',
                { active: store.filterState === FilterState.fast }
              )}>
              Самый быстрый
          </div>
          </div>
          <div className={cnApp('TicketList')}>
            <div></div>
          </div>
          {/*<TicketList />*/}
        </div>
      </div>
    </div>
  );
});
