
// ESTILOS DEL PROPIO COMPONENTE TODO FORM
import '../../styles/TodoApp/TodoForm.css'
import { useState } from 'react';

const formInit = {
    id: 0,
    task: '',
    status: false,
    statusDelet: false
}

const TodoForm = ({addNewTask}) =>{
    const [form, setForm] = useState(formInit)

    const heandlChangue = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            status: false
        })
    }

    const heandlSubmit = e =>{
        e.preventDefault();
        addNewTask(form)
        setForm(formInit)
    }

    return (
        <div className='todo-form'>
            <form className='form-todo' onSubmit={heandlSubmit}>
                <div className='component-todo-form'>
                    <input type='text' onChange={heandlChangue} value={form.task} name='task' placeholder='Agregar uneva tarea' />
                    <button>Agregar</button>
                </div>
            </form>
        </div>
    )
}
export default TodoForm;