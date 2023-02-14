import { useContext, FormEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { TasksContext } from '../../context/tasksContext';

import styles from './formnewtask.module.css';

export function FormNewTask() {

  const { addNewTask } = useContext(TasksContext);

  const [ newTask , setNewTask ] = useState('');

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    newTask === '' ? newTask : addNewTask(newTask);     
    setNewTask('');
  }

  return (
    <div className={styles.newTaskForm}>
  
      <form className={styles.newTask} onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Add a new Task'
          value={newTask}
          onChange={(e)=>{setNewTask(e.target.value)}}
          />
        <button>
          New <AiOutlinePlusCircle size={32} />
        </button>
      </form>

    </div>
  );
}
