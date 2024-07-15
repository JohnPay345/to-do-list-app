import React from 'react'
import style from './App.module.css'
import { Input } from './components/input/input'
import { Button } from './components/button/button'
import { Container } from './components/container/container'

export const App = () => {
  return (
    <header className={style}>
      <h1>Список дел</h1>
      <Container>
        <Container isfdCol={true}>
          <Input placeholderValue='Название' />
          <Input placeholderValue='Напишите что-нибудь' />
        </Container>
        <Container isfdCol={true} isWidthFlex={true} width='w-3'>
          <Button>Добавить</Button>
          <Button>Выделить всё</Button>
        </Container>
      </Container>
    </header>
  )
}
