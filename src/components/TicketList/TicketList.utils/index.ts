import { ITicket } from "../../../api/typings";

export const priceComparator = (t1: ITicket, t2: ITicket) => t1.price - t2.price;

export const durationComparator = (t1: ITicket, t2: ITicket) => (
    t1.segments.reduce((acc, segment) => acc + segment.duration, 0) - t2.segments.reduce((acc, segment) => acc + segment.duration, 0)
);