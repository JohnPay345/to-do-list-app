import React from 'react'
import style from './input.module.css'

type Props = {
    placeholder?: string | '';
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ placeholder, value, onChange }: Props) => {
    return (
        <input
            className={style.input}
            type="text" value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}
