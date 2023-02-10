import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from './formnewtask.module.css';

export function FormNewTask() {
  return (
    <div className={styles.newTaskForm}>
      <form className={styles.newTask}>
        <input type='text' placeholder='Add a new Task' />
        <button>New <AiOutlinePlusCircle size={32}/></button>
      </form>
    </div>
  );
}
