
// ESTILOS DEL PROPIO COMPONENTE TODOLIST
import '../../styles/TodoApp/TodoList.css'
import TodoItems from './TodoItems';


const TodoList = ({dataTask, updateStatusTask, deletTask, restoreTask}) => {

    return (
      <div className='todo-list'>
          <ul className='list-task'>
              {dataTask ? dataTask.map(task => <TodoItems key={task.id} id={task.id} task={task.task} status={task.status} statusDelet={task.statusDelet} updateStatusTask={updateStatusTask} deletTask={deletTask} restoreTask={restoreTask} />) : 'no hay tarea'}
          </ul>
      </div>
    )
}
export default TodoList;