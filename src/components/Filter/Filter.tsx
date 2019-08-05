import React from 'react';

import './Filter.scss';
import { cn } from 'recn';
import { Checkbox } from '../../elements/Checkbox/Checkbox';

const cnFilter = cn('Filter');

export const Filter = React.memo(() => {
    return (
        <div className={cnFilter()}>
            <div className={cnFilter('Caption')}>Количество пересадок</div>
            <Checkbox text="Все" />
        </div>
    );
});
