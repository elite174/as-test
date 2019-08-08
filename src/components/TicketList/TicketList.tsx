import React, { useMemo, useCallback, useContext } from 'react';
import { List } from 'react-virtualized';
import { cn } from 'recn';

import { Ticket } from '../Ticket/Ticket';
import { FilterState } from '../../features/App/App.store/const';
import { priceComparator, durationComparator } from './TicketList.utils';
import { AppContext } from '../../features/App/App.context';

import './TicketList.scss';

const cnTicketList = cn('TicketList');

interface ITicketListProps {
    sortBy: FilterState;
}

export const TicketList: React.FC<ITicketListProps> = React.memo(props => {
    const { sortBy } = props;
    const { store } = useContext(AppContext);

    const renderTickets = useMemo(() => store.tickets
        .filter(ticket => {
            if (store.transferCounts.all) {
                return true;
            }

            const stops = ticket.segments.map(segment => segment.stops.length);
            for (const stop of stops) {
                if (!store.transferCountsValues.includes(stop)) {
                    return false;
                }
            }

            return true;
        })
        .sort(sortBy === FilterState.cheap ? priceComparator : durationComparator)
        .map(ticket => <Ticket ticket={ticket} />), [store.tickets, sortBy, store.transferCountsValues]);

    const rowRenderer = useCallback(({ key, index, style }) => {
        return (
            <div style={style} key={key}>
                {renderTickets[index]}
            </div>
        );
    }, [renderTickets]);

    return (
        <div className={cnTicketList()}>
            <List
                rowCount={renderTickets.length}
                rowHeight={204}
                width={503}
                height={1015}
                rowRenderer={rowRenderer} />
        </div>
    );
});
