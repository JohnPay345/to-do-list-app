import React from 'react'
import style from './button.module.css'

type Props = {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({children}) => {
  return (
      <>
          <button className={style}>{children}</button>
      </>
  )
}
