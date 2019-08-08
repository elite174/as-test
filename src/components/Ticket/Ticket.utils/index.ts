/**
 * Возвращает отформатированную строку со временем перелёта
 * 
 * @param time string
 */
export const formatFlightTime = (time: number) => {
    const minutes = time % 60;
    const hours = Math.floor(time / 60) % 24;
    const days = Math.floor(time / 60 / 24);

    let formattedString = `${minutes}м`;

    if (hours || days) {
        formattedString = `${hours}ч ` + formattedString;
    }

    if (days) {
        formattedString = `${days}д ` + formattedString;
    }

    return formattedString;
};

/**
 * Возвращает отформатированную строку с ценой
 * @param price number
 */
export const formatPrice = (price: number) => {
    let formattedString = String(Math.floor(price));

    if (formattedString.length < 4) {
        return formattedString + ' Р';
    }

    const prefix = formattedString.slice(0, formattedString.length % 3);
    const parts = formattedString.slice(formattedString.length % 3).match(/.{1,3}/g);

    return (prefix ? `${prefix} ` : '') +
        (parts ? parts.join(' ') : '') + ' Р';
};

/**
 * Возвращает ссылку на лого компании
 * 
 * @param carrier string
 */
export const getCarrierLogo = (carrier: string) => {
    return `//pics.avs.io/99/36/${carrier}.png`;
};

/**
 * Возвращает отформатированную строку с количеством пересадок
 * 
 * @param stopsCount number
 */
export const formatStops = (stopsCount: number) => {
    const lastNumber = stopsCount % 100;

    if (stopsCount === 0) {
        return 'прямой';
    }

    if (lastNumber > 10 && lastNumber < 20) {
        return `${stopsCount} пересадок`
    }

    switch (stopsCount % 10) {
        case 1:
            return `${stopsCount} пересадка`;
        case 2:
        case 3:
        case 4:
            return `${stopsCount} пересадки`;
        default:
            return `${stopsCount} пересадок`;
    };
};

/** Дополняет строку нулями */
export const padTime = (time: number) => String(time).padStart(2, '0');