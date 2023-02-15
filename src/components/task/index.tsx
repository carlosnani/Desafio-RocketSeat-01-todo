import { useContext, useState } from 'react';
import style from './task.module.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TaskProps, TasksContext } from '../../context/tasksContext';

interface propsTask {
  task: TaskProps
}

export function Task({task} : propsTask ){

  const { deleteTaskById, isTaskCompleted } = useContext(TasksContext);
 

  function deleteTask(id : string){
    deleteTaskById(id);
  }

   function isCompletedTask(id: string){
    isTaskCompleted(id);
  }


  return (
    <div className={style.task}>
      <button onClick={()=>isCompletedTask(task.id)} className={style.isCompletedTask}>
        
         {task.isCompleted ? <BsFillCheckCircleFill/> : <div></div> }  

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


