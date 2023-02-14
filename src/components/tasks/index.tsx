import { Task } from '../../components/task';
import { useContext } from 'react';
import { TasksContext } from '../../context/tasksContext';
import styles from './tasks.module.css';

export function Tasks() {

  const { tasks } = useContext(TasksContext);
  console.log()
   
  return (
    <>
      <section className={styles.tasks}>
        <header>
          <div>
            <p>Tarefas Criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div>
            <p>Concluídas</p>
            <span>1 de {tasks.length}</span>
          </div>
        </header>
        {tasks.map(task =>
          <Task task={task} key={task.id} />
        )}
      </section>
    </>
  );
}