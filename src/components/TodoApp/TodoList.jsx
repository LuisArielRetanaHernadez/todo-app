
// ESTILOS DEL PROPIO COMPONENTE TODOLIST
import '../../styles/TodoApp/TodoList.css'
import TodoItems from './TodoItems';


const TodoList = ({dataTask, updateStatusTask, deletTask}) => {

    return (
      <div className='todo-list'>
          <ul className='list-task'>
              {dataTask ? dataTask.map(task => <TodoItems key={task.id} id={task.id} task={task.task} status={task.status} updateStatusTask={updateStatusTask} deletTask={deletTask}/>) : 'no hay tarea'}
          </ul>
      </div>
    )
}
export default TodoList;