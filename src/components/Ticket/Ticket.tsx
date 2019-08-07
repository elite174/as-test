import React from 'react';
import { cn } from 'recn';

import { ITicket } from '../../api/typings';
import { formatPrice, getCarrierLogo } from './Ticket.utils';
import { TicketSegment } from './Segment/Ticket-Segment';

import './Ticket.scss';

export const cnTicket = cn('Ticket');

interface ITicketProps {
    ticket: ITicket;
    style?: React.CSSProperties;
}

export const Ticket: React.FC<ITicketProps> = React.memo(props => {
    const { ticket, style } = props;

    return (
        <div className={cnTicket()} style={style}>
            <div className={cnTicket('Row')}>
                <div className={cnTicket('Price')}>{formatPrice(ticket.price)}</div>
                <div className={cnTicket('CarrierLogo')} style={{
                    backgroundImage: `url(${getCarrierLogo(ticket.carrier)})`
                }} />
            </div>
            <div className={cnTicket('Info')}>
                {ticket.segments.map((segment, i) => (
                    <TicketSegment
                        // Здесь мы не будем ничего делать с сегментами,
                        // поэтому можно использовать такой ключ
                        key={`segment-${i}`}
                        {...segment} />
                ))}
            </div>
        </div>
    );
});
