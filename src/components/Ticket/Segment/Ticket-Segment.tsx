import React from 'react';

import { cnTicket } from '../Ticket';
import { formatStops, formatFlightTime, padTime } from '../Ticket.utils';

import './Ticket-Segment.scss';

interface ITicketSegmentProps {
    /** Код города (iata) */
    origin: string;
    /** Код города (iata) */
    destination: string;
    /** Массив кодов (iata) городов с пересадками */
    stops: string[];
    /** Общее время перелёта в минутах */
    duration: number;
    /** Дата и время вылета */
    date: string;
}

export const TicketSegment: React.FC<ITicketSegmentProps> = React.memo(props => {
    const { origin, destination, duration, stops, date } = props;

    /** Формируем время отлёта и прилёта */
    let ticketDate = new Date(date);
    const departureTime = `${padTime(ticketDate.getHours())}:${padTime(ticketDate.getMinutes())}`;
    ticketDate = new Date(ticketDate.getTime() + duration * 60 * 1000);
    const arrivalTime = `${padTime(ticketDate.getHours())}:${padTime(ticketDate.getMinutes())}`;

    return (
        <div className={cnTicket('Segment')}>
            <table className={cnTicket('SegmentTable')}>
                <tbody>
                    <tr className={cnTicket('KeyRow')}>
                        <td>{origin} - {destination}</td>
                        <td>в пути</td>
                        <td>{formatStops(stops.length)}</td>
                    </tr>
                    <tr className={cnTicket('ValueRow')}>
                        <td>{departureTime} - {arrivalTime}</td>
                        <td>{formatFlightTime(duration)}</td>
                        <td>{stops.join(', ')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
});
