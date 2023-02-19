import { createContext, useState, ReactNode } from "react";
 
 
export interface TaskProps {
  id: string;
  bodyText: string;
  isCompleted: boolean; 
}

type ArrayTaskProps = {
  tasks: TaskProps[];
  addNewTask: (bodyText: string) => void;
  deleteTaskById: (bodyText: string) => void;  
  isTaskCompleted: (id: string) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext<ArrayTaskProps>(
  { 
    tasks: [],
    addNewTask: () => {},
    deleteTaskById: () => {},
    isTaskCompleted:() => {}  
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

  function deleteTaskById(taskId: string){
    const newTasks = tasks.filter(task => task.id !== taskId); 
    setTasks(newTasks);
  }

  function isTaskCompleted(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {
          ...task, 
          isCompleted: !task.isCompleted
        }
      }
      return task
    }); 
    setTasks(newTasks); 
  } 

  return (
    <TasksContext.Provider value={{
       tasks,
       addNewTask,
       deleteTaskById,
       isTaskCompleted  

    }}>
    {children}  
    </TasksContext.Provider>
  )
}
