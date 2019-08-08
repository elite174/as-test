import React, { useReducer, useEffect, useState, useCallback } from 'react';
import { cn } from 'recn';

import { AppContext } from './App.context';
import { TransferFilter } from '../../components/TransferFilter/TransferFilter';
import { reducer, initialState } from './App.store';
import { FilterState, TransferCountsNames } from './App.store/const';
import { addTickets, setTransferCount } from './App.store/actions';
import { TicketList } from '../../components/TicketList/TicketList';
import { makeRequest } from '../../api';
import { routes } from '../../api/const';

import './App.scss';
import './App.constants.scss';

const cnApp = cn('App');

export const App: React.FC<{}> = React.memo(() => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const [sortBy, setSortBy] = useState(FilterState.cheap);
  const chechboxHandler = useCallback((checkboxName: TransferCountsNames) =>
    dispatch(setTransferCount(checkboxName)), []);

  useEffect(() => {
    /** Получаем searchId */
    const getSearchId = async () => {
      const response = await makeRequest(routes.search);
      const json = await response.json();

      return json.searchId;
    };

    /** Получаем пачку билетов */
    const getFlights = async (searchId: string) => {

      const response = await makeRequest(routes.tickets, searchId);
      let json;

      try {
        json = await response.json();
      } catch (err) {
        /** Прекращаем поиск, если сервер ответил ошибкой */
        return;
      }

      dispatch(addTickets(json.tickets));

      /** Продолжаем получать пачки билетов */
      if (!json.stop) {
        setTimeout(() => getFlights(searchId), 0);
      }
    };

    /** Делаем запросы на сервер */
    const request = async () => {
      const searchId = await getSearchId();

      await getFlights(searchId);
    };

    request();
  }, []);

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      <div className={cnApp()}>
        <div className={cnApp('Logo')}></div>
        <div className={cnApp('Content')}>
          <div className={cnApp('LeftColumn')}>
            <TransferFilter checkboxHandler={chechboxHandler} />
          </div>
          <div className={cnApp('RightColumn')}>
            <div className={cnApp('FilterControl')}>
              <div
                onClick={() => setSortBy(FilterState.cheap)}
                className={cnApp('FilterButton', { active: sortBy === FilterState.cheap })}
              >
                Самый дешёвый
              </div>
              <div
                onClick={() => setSortBy(FilterState.fast)}
                className={cnApp('FilterButton', { active: sortBy === FilterState.fast })}
              >
                Самый быстрый
              </div>
            </div>
            <TicketList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </AppContext.Provider >
  );
});
