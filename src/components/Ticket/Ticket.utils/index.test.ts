import { formatFlightTime, formatPrice, formatStops } from ".";

describe('Ticket test', () => {
    test('formatFlightTime function', () => {
        expect(formatFlightTime(59)).toBe('59м');
        expect(formatFlightTime(60)).toBe('1ч 0м');
        expect(formatFlightTime(60 * 24)).toBe('1д 0ч 0м');
        expect(formatFlightTime((60 * 24) * 5 + 60 * 7 + 35)).toBe('5д 7ч 35м');
        expect(formatFlightTime((60 * 24) * 5 + 60 * 25 + 35)).toBe('6д 1ч 35м');
    });

    test('formatPrice function', () => {
        expect(formatPrice(123)).toBe('123 Р');
        expect(formatPrice(1234)).toBe('1 234 Р');
        expect(formatPrice(12345)).toBe('12 345 Р');
    });

    test('formatStops function', () => {
        expect(formatStops(3)).toBe('3 пересадки');
        expect(formatStops(5)).toBe('5 пересадок');
        expect(formatStops(1)).toBe('1 пересадка');
        expect(formatStops(0)).toBe('прямой');
        expect(formatStops(13)).toBe('13 пересадок');
    });
});
