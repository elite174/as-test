import React, { useReducer } from 'react';
import { cn } from 'recn';

import { Filter } from '../../components/Filter/Filter';

const cnApp = cn('App');

export const App = React.memo(() => {
  //const [store, dispatch] = useReducer(, {});


  return <div className={cnApp()}>
    <div className={cnApp('Logo')}></div>
    <div className={cnApp('')}>
      <div className={cnApp('LeftColumn')}>
        <Filter />
      </div>
      <div className={cnApp('RightColumn')}>
        {/*<TicketList />*/}
      </div>
    </div>
  </div>;
});
