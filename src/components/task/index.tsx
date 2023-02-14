import style from './task.module.css';
import { RiDeleteBin5Line } from "react-icons/ri"
import { TaskProps } from '../../context/tasksContext';

interface propsTask {
  task: TaskProps
}

export function Task({task} : propsTask ){
  return (
    <div className={style.task}>
      <button>
        <div></div>
      </button>
      <p>
      {task.bodyText}
      </p> 
      <button>
        <RiDeleteBin5Line size={18}/>
      </button>
    </div>
  )
}


