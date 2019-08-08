import React from 'react';

import './Filter.scss';
import { cn } from 'recn';
import { Checkbox } from '../../elements/Checkbox/Checkbox';

const cnFilter = cn('Filter');

export interface IFilterProps {
    pickCheckbox: (checkboxName: string) => void;
}

export const Filter = React.memo(() => {
    return (
        <div className={cnFilter()}>
            <div className={cnFilter('Caption')}>Количество пересадок</div>
            <Checkbox text="Все" />
            <Checkbox text="Без пересадок" />
            <Checkbox text="1 пересадка" />
            <Checkbox text="2 пересадки" />
            <Checkbox text="3 пересадки" />
        </div>
    );
});
