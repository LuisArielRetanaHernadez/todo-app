// COMPONENTES DE LA PROPIA VIEWS TODOAPP
import Menu from "../components/Menu";
import TodoFilterTask from "../components/TodoApp/TodoFilterTask";
import TodoForm from "../components/TodoApp/TodoForm";
import TodoList from "../components/TodoApp/TodoList";

// ESTILOS DEL PROPIO COMPONENTE
import '../styles/style-views/TodoApp.css'

// HOOKS DEL REACT
import { useState } from 'react';
import { useEffect } from 'react';

// DATOS DE LAS LISTAS
const task = [
    {
        id: 1,
        task: "Ir a jugar futbol",
        status: true
    },
    {
        id: 2,
        task: "ir a jugar al xbox",
        status: false
    },
    {
        id: 3,
        task: "acabar el proyecto del todo app",
        status: false
    },
    {
        id: 4,
        task: "ir a comer con mi mama",
        status: false
    },
    {
        id: 5,
        task: "jugar todos los dia con la mabi",
        status: false
    },
    {
        id: 6,
        task: "ir a comprar la RTX 3090",
        status: false
    },
    {
        id: 7,
        task: "acabar el proyecto de react js",
        status: false
    }
]


const TodoApp = () => {

    // ESTADOS
    const [data, setData] = useState(task)
    const [dataTask, setDataTask] = useState(task)
    const [filterTask, setFilterTask] = useState('all')
    const [idInit, setIdInit] = useState(task[task.length - 1].id)

    // FILTER Y RENDE DE TASK
    useEffect(() => {
        
        if(filterTask !== 'all' && task){

            const TaskRende = data.filter(task => task.status === JSON.parse(filterTask))
            setDataTask(TaskRende)
        }else{
            setDataTask(data)
        }
        console.log(filterTask)
        return () => {
            setDataTask(data)
        }
    },[filterTask, data])

    const updateStatusTask = id => {
        data.forEach(task => {
            if(task.id === id){
                task.status ? task.status = false : task.status = true
            }
        })
        const newUpdateTask = data.map(task => task)
        setDataTask(newUpdateTask)
        setData(newUpdateTask)
    }

    const deletTask = id => {
        const newDeletTask = data.filter(task => task.id !== id)
        setDataTask(newDeletTask)
        setData(newDeletTask)
    }

    const addNewTask = (newTask) => {
        const redundancy = data.some(task => task.task === newTask.task)
        if(newTask.task){
            if (!redundancy){
                const newId = generatorId(idInit)
                newTask.id = newId
                setDataTask([...data,newTask])
                setData([...data,newTask])
            }else{
                alert('ya tienes una tarea con ese nombre')
            }
        }else{
            alert('no dejes el formulario vacio')
        }
    }
    const generatorId = (id) => {
        const idGenerator = id + 1
        setIdInit(idGenerator)
        return idGenerator
    }
    console.log(idInit)
    console.log(data)



    return (
    <div className='tw-w-screen tw-h-screen container-general-todo-app'>
        <Menu />
       <div className='container-todo-app'>
            <div className='todo-app'>
                <div className='header-todo-app'>
                    <TodoForm addNewTask={addNewTask}/>
                    <TodoFilterTask filterTask={filterTask} setFilterTask={setFilterTask} />
                </div>
                <div className='container-todo-list'>
                    <TodoList dataTask={dataTask} updateStatusTask={updateStatusTask} deletTask={deletTask} />
                </div>
            </div>
       </div>
    </div>
    )
}
export default TodoApp;