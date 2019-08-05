import React from 'react';
import { cn } from 'recn';

import './Checkbox.scss';

const cnCheckbox = cn('Checkbox');

interface ICheckboxProps {
    checked?: boolean;
    text: string;
}

export const Checkbox: React.FC<ICheckboxProps> = React.memo(props => {
    const { checked, text } = props;

    return (
        <label className={cnCheckbox()}>
            <input className={cnCheckbox('Input')} type="checkbox" checked={checked} />
            <span className={cnCheckbox('CheckMark')}></span>
            <span className={cnCheckbox('Text')}>{text}</span>
        </label>
    );
});
