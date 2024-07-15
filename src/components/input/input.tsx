import React from 'react'
import style from "./input.module.css"

type Props = {
  placeholderValue: string;
}

export const Input: React.FC<Props> = ({placeholderValue}) => {
  return (
      <>
        <input type="text" placeholder={placeholderValue} className={style} />
      </>
  )
}
