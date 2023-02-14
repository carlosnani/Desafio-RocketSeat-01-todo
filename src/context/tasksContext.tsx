import { createContext, useState, ReactNode } from "react";
import { Task } from './../components/task/index';
 
export interface TaskProps {
  id: string;
  isCompleted: boolean; 
  bodyText: string;
}

type ArrayTaskProps = {
  tasks: TaskProps[];
  addNewTask: (bodyText: string) => void;
  deleteTaskById: (bodyText: string) => void;  
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext<ArrayTaskProps>(
  { 
    tasks: [],
    addNewTask: () => {},
    deleteTaskById: () => {}  
   }
);


export function TaskProvider({children}: TaskProviderProps){

  const [tasks, setTasks] = useState<TaskProps[]>([]);


  function addNewTask(bodyText: string){
    setTasks([
      ...tasks, 
      {
        id: crypto.randomUUID(),
        isCompleted: false, 
        bodyText: bodyText,
      }
    ]);
  }

  function deleteTaskById(TaskId: string){
    const newTasks = tasks.filter(task => task.id !== TaskId); 
    setTasks(newTasks);
  }

  return (
    <TasksContext.Provider value={{
       tasks,
       addNewTask,
       deleteTaskById
    }}>
    {children}  
    </TasksContext.Provider>
  )
}
