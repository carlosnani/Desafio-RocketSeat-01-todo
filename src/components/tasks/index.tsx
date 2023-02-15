import { Task } from '../../components/task';
import { useContext } from 'react';
import { TasksContext } from '../../context/tasksContext';
import { TbClipboardOff } from "react-icons/tb";
import styles from './tasks.module.css';

export function Tasks() {

  const { tasks } = useContext(TasksContext);
  const completedTasks = tasks.filter(task => task.isCompleted).length;

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
              <span>{completedTasks} de {tasks.length}</span>
            </div>
          </header>

        {tasks.map(task =>
          <Task task={task} key={task.id} />
        )}
        <div>
        {tasks.length <= 0 &&
        <div>
          <TbClipboardOff />
          <p><span>You don't have tasks registered yet</span><br />
           Create tasks and organize your to-do items 
          </p>
        </div>
      }
        </div>
      </section>

    </>
  );
}