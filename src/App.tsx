import { FormNewTask } from './components/FormNewTask';
import { Header } from './components/Header';
import { Tasks } from './components/tasks';
import './global.css';  

function App() {
  
  return (
    <>
    <Header />
    <FormNewTask />
    <Tasks />
    </>
  )
}

export default App
