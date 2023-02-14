import { useContext } from 'react';
import style from './task.module.css';
import { RiDeleteBin5Line } from "react-icons/ri"
import { TaskProps, TasksContext } from '../../context/tasksContext';

interface propsTask {
  task: TaskProps
}

export function Task({task} : propsTask ){

  const { deleteTaskById } = useContext(TasksContext);

  function deleteTask(id : string){
    deleteTaskById(id);
  }

  return (
    <div className={style.task}>
      <button>
        <div></div>
      </button>
      <p>
      {task.bodyText}
      </p> 
      <button onClick={()=>{deleteTask(task.id)}}>
        <RiDeleteBin5Line size={18}/>
      </button>
    </div>
  )
}


