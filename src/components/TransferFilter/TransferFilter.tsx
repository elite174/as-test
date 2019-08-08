import React, { useCallback, useContext } from 'react';
import { cn } from 'recn';

import { Checkbox } from '../../elements/Checkbox/Checkbox';
import { TransferCountsNames } from '../../features/App/App.store/const';
import { AppContext } from '../../features/App/App.context';

import './TransferFilter.scss';

const cnTransferFilter = cn('TransferFilter');

export interface TransferFilterProps {
    /** Обработчик на нажатие checkbox */
    checkboxHandler: (checkboxName: TransferCountsNames) => void;
}

export const TransferFilter: React.FC<TransferFilterProps> = React.memo(props => {
    const { checkboxHandler } = props;
    const { store } = useContext(AppContext);
    const onCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        checkboxHandler(e.target.name as TransferCountsNames);
    }, [checkboxHandler]);

    return (
        <div className={cnTransferFilter()}>
            <div className={cnTransferFilter('Caption')}>Количество пересадок</div>
            <Checkbox text="Все" checked={store.transferCounts.all} name={TransferCountsNames.all} onCheckboxChange={onCheckboxChange} />
            <Checkbox text="Без пересадок" checked={store.transferCounts.zero} name={TransferCountsNames.zero} onCheckboxChange={onCheckboxChange} />
            <Checkbox text="1 пересадка" checked={store.transferCounts.one} name={TransferCountsNames.one} onCheckboxChange={onCheckboxChange} />
            <Checkbox text="2 пересадки" checked={store.transferCounts.two} name={TransferCountsNames.two} onCheckboxChange={onCheckboxChange} />
            <Checkbox text="3 пересадки" checked={store.transferCounts.three} name={TransferCountsNames.three} onCheckboxChange={onCheckboxChange} />
        </div>
    );
});
