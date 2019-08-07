import React, { useReducer, useEffect } from 'react';
import { cn } from 'recn';

import { Filter } from '../../components/Filter/Filter';
import { reducer, initialState } from './App.store';
import { FilterState } from './App.store/const';
import { changeFilterState, addTickets } from './App.store/actions';
import { TicketList } from '../../components/TicketList/TicketList';
import { makeRequest } from '../../api';
import { routes } from '../../api/const';

import './App.scss';
import './App.constants.scss';

const cnApp = cn('App');

export const App = React.memo(() => {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getSearchId = async () => {
      const response = await makeRequest(routes.search);
      const json = await response.json();
      return json.searchId;
    };

    const getFlights = async (searchId: string) => {
      const response = await makeRequest(routes.tickets, searchId);
      let json;

      try {
        json = await response.json();
      } catch (err) {
        return true;
      }

      dispatch(addTickets(json.tickets));

      return json.stop;
    };

    const fetchAllFlights = async (searchId: string) => {
      let isStop = await getFlights(searchId);

      while (!isStop) {
        isStop = await getFlights(searchId);
      }
    };

    const request = async () => {
      const searchId = await getSearchId();
      await fetchAllFlights(searchId);
    };

    request();
  }, [])

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
                { active: store.sortBy === FilterState.cheap }
              )}>
              Самый дешёвый
          </div>
            <div
              onClick={() => dispatch(changeFilterState(FilterState.fast))}
              className={cnApp('FilterButton',
                { active: store.sortBy === FilterState.fast }
              )}>
              Самый быстрый
          </div>
          </div>
          <TicketList
            sortBy={store.sortBy}
            tickets={store.tickets} />
        </div>
      </div>
    </div>
  );
});
