import { createContext, useState, ReactNode } from "react";
 
export interface TaskProps {
  id: string;
  isCompleted: boolean; 
  bodyText: string;
}

type ArrayTaskProps = {
  tasks: TaskProps[];
  addNewTask: (bodyText: string) => void;
  deleteTask: () => void;  
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext<ArrayTaskProps>(
  { 
    tasks: [],
    addNewTask: () => {},
    deleteTask: () => {}  
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

  function deleteTask(){
    console.log("deleteTask");
  }

  return (
    <TasksContext.Provider value={{
       tasks,
       addNewTask,
       deleteTask
    }}>
    {children}  
    </TasksContext.Provider>
  )
}
