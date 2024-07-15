import React from 'react'
import style from './App.module.css'
import { Input } from './components/input/input'
import { Button } from './components/button/button'

export const App = () => {
  return (
    <header className={style}>
      <h1>Список дел</h1>
      <Input />
      <Button>Добавить</Button>
      <Button>Выделить всё</Button>
    </header>
  )
}
