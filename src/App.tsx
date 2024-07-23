import React, { useState } from 'react'
import style from './App.module.css'
import { Input } from './component/input/input'
import { Button } from './component/button/button'
import { Task } from './component/task/task'
import { generateKey } from './features/generateKey'

type taskProps = {
  name: string;
  text: string;
  arrayTasks: Array<React.ReactElement<HTMLDivElement>>;
}

export const App = () => {
  const [task, setTask] = useState<taskProps>({
    name: '',
    text: '',
    arrayTasks: []
  });
  const [array, setArray] = useState<any>([]);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    setTask((prev) => (
      {
        ...prev,
        name: newValue
      }
    ));
  }

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    setTask((prev) => (
      {
        ...prev,
        text: newValue
      }
    ));
  }

  const handleClickUnshiftTask = (): undefined => {
    if (!task.name || !task.text) {
      return;
    }
    let newArrayTasks: React.ReactElement<HTMLDivElement>[] = array;
    newArrayTasks.unshift(<Task key={generateKey(task.text)} name={task.name} text={task.text} id={generateKey(task.text)} arrayTasks={array} onClick={handleClickDeleteTask}/>);
    setArray(newArrayTasks);
    setTask({
      name: '',
      text: '',
      arrayTasks: newArrayTasks
    });
  }

  const handleClickDeleteTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    let newArrayTasks: React.ReactElement<HTMLDivElement>[] = task.arrayTasks;
    newArrayTasks.shift();
    setTask((prev) => ({
      ...prev,
      arrayTasks: newArrayTasks
    }))
  }

  return (
    <>
      <header className={style.header}>
        <h1>Список дел</h1>
        <div className={style.container}>
          <div className={style.containerInputs}>
            <Input placeholder='Название' value={task.name} onChange={handleChangeName} />
            <Input placeholder='Напишите что-нибудь' value={task.text} onChange={handleChangeText} />
          </div>
          <div className={style.containerButtons}>
            <Button onClick={handleClickUnshiftTask}>Добавить</Button>
            <Button>Выделить все</Button>
          </div>
        </div>
        <br />
        <div className="list-task">
          {task.arrayTasks ?? null}
        </div>
      </header>
    </>
  )
}
