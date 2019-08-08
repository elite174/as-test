import React, { useCallback, useContext } from 'react';

import './Filter.scss';
import { cn } from 'recn';
import { Checkbox } from '../../elements/Checkbox/Checkbox';
import { TransferCountNames } from '../../features/App/App.store/const';
import { AppContext } from '../../features/App/App.context';

const cnFilter = cn('Filter');

export interface IFilterProps {
    pickCheckbox: (checkboxName: TransferCountNames) => void;
}

export const Filter: React.FC<IFilterProps> = React.memo(props => {
    const { pickCheckbox } = props;
    const onCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        pickCheckbox(e.target.name as TransferCountNames);
    }, [pickCheckbox]);
    const { store } = useContext(AppContext);

    return (
        <div className={cnFilter()}>
            <div className={cnFilter('Caption')}>Количество пересадок</div>
            <Checkbox text="Все" checked={store.transferCounts.all} name={TransferCountNames.all} onCheckboxChange={onCheckboxChange} />
            <Checkbox text="Без пересадок" checked={store.transferCounts.zero} name={TransferCountNames.zero} onCheckboxChange={onCheckboxChange} />
            <Checkbox text="1 пересадка" checked={store.transferCounts.one} name={TransferCountNames.one} onCheckboxChange={onCheckboxChange} />
            <Checkbox text="2 пересадки" checked={store.transferCounts.two} name={TransferCountNames.two} onCheckboxChange={onCheckboxChange} />
            <Checkbox text="3 пересадки" checked={store.transferCounts.three} name={TransferCountNames.three} onCheckboxChange={onCheckboxChange} />
        </div>
    );
});
