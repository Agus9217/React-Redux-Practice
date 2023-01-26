import { useSelector } from 'react-redux';
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import './App.css';

function App() {

  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState)

  return (
    <div className="App">
      <h1>Hello World</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
