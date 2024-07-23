import React from 'react'
import style from './button.module.css'

type Props = {
  children: string | '';
  onClick?: React.MouseEventHandler;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className={style.button}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
