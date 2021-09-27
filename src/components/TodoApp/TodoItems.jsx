
// ESTILOS DEL PROPIO COMPONENTE TODOITEMS
import '../../styles/TodoApp/TodoItems.css'

const TodoItems = ({id, task, status, updateStatusTask, deletTask}) => {

    return (
        <li className={`${status ? 'todo-items-status-true' : 'todo-items-status-false'}`}>
            <ul className='item-description'>
                <li className={`${status ? 'item-task-true' : 'item-task-false'}`} onClick={() => updateStatusTask(id)}><p>{task}</p></li>
                {status && <li className='item-btn-delet-task'><svg xmlns="http://www.w3.org/2000/svg" className="tw-h-6 tw-w-6 tw-m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => deletTask(id)}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></li>}
            </ul>

        </li>
    )
}
export default TodoItems