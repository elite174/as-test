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
    /** Метод сортировки */
    sortBy: FilterState;
}

/** Высота строки с билетом */
const rowHeight = 204;
/** Ширина листа с билетами */
const listWidth = 503;
/** Высота всего листа с билетами */
const listHeight = 1015;

export const TicketList: React.FC<ITicketListProps> = React.memo(props => {
    const { sortBy } = props;
    const { store } = useContext(AppContext);
    const renderedTickets = useMemo(() => store.tickets
        /** Фильтруем билеты по пересадкам */
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
        .map(ticket => <Ticket ticket={ticket} />), [store.tickets, sortBy, store.transferCountsValues, store.transferCounts.all]);

    /** Render-фуннкция для virtualized листа */
    const rowRenderer = useCallback(({ key, index, style }) => {
        return (
            <div style={style} key={key}>
                {renderedTickets[index]}
            </div>
        );
    }, [renderedTickets]);

    return (
        <div className={cnTicketList()}>
            {renderedTickets.length === 0 ?
                <div className={cnTicketList('EmptyResult')}>билеты не найдены</div> : <List
                    rowCount={renderedTickets.length}
                    rowHeight={rowHeight}
                    width={listWidth}
                    height={listHeight}
                    rowRenderer={rowRenderer} />}
        </div>
    );
});
