import React from 'react';
import { Button } from '../button/button';
import style from './task.module.css'

type Props = {
    name: string;
    text: string;
    id: string;
    arrayTasks: React.ReactNode[];
    onClick?: React.MouseEventHandler;
}

export const Task = ({ name, text, id, arrayTasks, onClick }: Props) => {
    const handleInfo = () => {
        let idTask = document.getElementById(id);
        let array: any[] = arrayTasks;
        array.forEach((item) => {
            if (item.props.id === idTask?.id) {
                console.log(true)
            } else {
                console.log(false)
            }
        })
        console.log(array.findIndex((item) => item.props.id == idTask?.id))
    }
    return (
        <div className={style.task} id={id}>
            <h3>{name}</h3>
            <p>{text}</p>
            <Button onClick={handleInfo}>Удалить</Button>
        </div>
    )
}