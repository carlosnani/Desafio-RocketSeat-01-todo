import { FormNewTask } from './components/FormNewTask';
import { Header } from './components/Header';
import { Tasks } from './components/tasks';
import { TaskProvider } from './context/tasksContext';
import './global.css';  

function App() {
  
  return (
    <>
    <TaskProvider >
      <Header />
      <FormNewTask />
      <Tasks />
    </TaskProvider>
    </>
  )
}

export default App
