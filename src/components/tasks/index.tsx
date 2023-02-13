import { Task } from '../../components/task'
import styles from './tasks.module.css';


export function Tasks(){ 
  return (
    <section className={styles.tasks}>
      <header>
        <div>
          <p>Tarefas Criadas</p>
          <span>10</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>2 de 10</span>
        </div>
      </header>
      <Task /> 
      <Task /> 
      <Task /> 
    </section>
  )
}


