import { Button } from '../button/button';
import style from './task.module.css'

type Props = {
    name: string;
    text: string;
    id: string;
    arrayTasks: React.ReactNode[];
    getIndex: (indexTask: number) => void;
}

export const Task = ({ name, text, id, arrayTasks, getIndex }: Props) => {
    const handleClickGetIndexTask = () => {
        let idTask = document.getElementById(id);
        let array: any[] = arrayTasks;
        let indexTask = array.findIndex((item) => item.props.id == idTask?.id)
        getIndex(indexTask);
    }
    return (
        <div className={style.task} id={id}>
            <h3>{name}</h3>
            <p>{text}</p>
            <Button onClick={handleClickGetIndexTask}>Удалить</Button>
        </div>
    )
}