
// ESTILOS DEL PROPIO COMPONENTE TODOFILTERTASK
import '../../styles/TodoApp/TodoFilterTask.css'

const TodoFilterTask = ({filterTask, setFilterTask}) => {

    return (
        <div className='todo-filter-task'>
            <select value={filterTask} onChange={e => setFilterTask(e.target.value)}>
                    <option value='all'>Todos</option>
                    <option value='true'>Completos</option>
                    <option value='false'>sin completar</option>
                    <option value='paperBin'>Papelera</option>
            </select>
        </div>
    )
}
export default TodoFilterTask;