import { createContext, useState, ReactNode } from "react";
 
export interface TaskProps {
  id: string;
  isCompleted: boolean; 
  bodyText: string;
}

type ArrayTaskProps = {
  tasks: TaskProps[];
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext<ArrayTaskProps>(
  { tasks: [] }
);


export function TaskProvider({children}: TaskProviderProps){

  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: '001',
      isCompleted: false, 
      bodyText: 'Aqui vai um texto',
    },
    {
      id: '003',
      isCompleted: false, 
      bodyText: 'Aqui vai um texto',
    }
  ]);


  return (
    <TasksContext.Provider value={{
       tasks, 
    }}>
    {children}  
    </TasksContext.Provider>
  )
}
