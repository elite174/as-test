import React, { useMemo, useCallback } from 'react';
import { cn } from 'recn';

import { ITicket } from '../../api/typings';
import { Ticket } from '../Ticket/Ticket';

import './TicketList.scss';
import { FilterState } from '../../features/App/App.store/const';
import { priceComparator, durationComparator } from './TicketList.utils';
import { List } from 'react-virtualized';

const cnTicketList = cn('TicketList');

interface ITicketListProps {
    tickets: ITicket[];
    sortBy: FilterState;
}

export const TicketList: React.FC<ITicketListProps> = React.memo(props => {
    const { tickets, sortBy } = props;

    const renderTickets = useMemo(() => tickets
        .sort(sortBy === FilterState.cheap ? priceComparator : durationComparator)
        .map(ticket => <Ticket ticket={ticket} />), [tickets, sortBy]);

    const rowRenderer = useCallback(({
        key,         // Unique key within array of rows
        index,       // Index of row within collection
        style        // Style object to be applied to row (to position it)
    }) => {
        return (
            <div style={style} key={key}>
                {renderTickets[index]}
            </div>
        )
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
