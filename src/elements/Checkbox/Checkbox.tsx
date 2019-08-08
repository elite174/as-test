import React from 'react';
import { cn } from 'recn';

import './Checkbox.scss';

const cnCheckbox = cn('Checkbox');

interface ICheckboxProps {
    checked?: boolean;
    /** Текст чекбокса */
    text: string;
    /** Обработчик клика чекбокса */
    onCheckboxChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** Имя чекбокса */
    name?: string;
}

export const Checkbox: React.FC<ICheckboxProps> = React.memo(props => {
    const { checked, text, onCheckboxChange, name } = props;

    return (
        <label className={cnCheckbox()}>
            <input name={name} className={cnCheckbox('Input')} type="checkbox" checked={checked} onChange={onCheckboxChange} />
            <span className={cnCheckbox('CheckMark')}></span>
            <span className={cnCheckbox('Text')}>{text}</span>
        </label>
    );
});
