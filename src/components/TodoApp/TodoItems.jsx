
// ESTILOS DEL PROPIO COMPONENTE TODOITEMS
import '../../styles/TodoApp/TodoItems.css'

const TodoItems = ({id, task, status, updateStatusTask, deletTask, statusDelet, restoreTask}) => {

    return (
        <li className={`${ !statusDelet && status ? 'todo-items-status-true' : 'todo-items-status-false'}`}>
            <ul className='item-description'>
                <li className={`${ !statusDelet ? status ? 'item-task-true' : 'item-task-false' :  'item-task-true'}`} onClick={() => { !statusDelet && updateStatusTask(id)}}><p>{task}</p></li>
                {status && <li className='item-btn-delet-task'><svg xmlns="http://www.w3.org/2000/svg" className="tw-h-6 tw-w-6 tw-m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => deletTask(id,statusDelet)}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></li> }
                {statusDelet && <li className='item-btn-delet-task'><svg xmlns="http://www.w3.org/2000/svg" className="tw-h-6 tw-w-6 tw-m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => restoreTask(id)}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></li> }

            </ul>

        </li>
    )
}
export default TodoItems