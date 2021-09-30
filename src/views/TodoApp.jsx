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
        task: "ir a jugar futbol",
        status: true,
        statusDelet: false
    },
    {
        id: 2,
        task: "ir a jugar al xbox",
        status: false,
        statusDelet: false
    },
    {
        id: 3,
        task: "acabar el proyecto del todo app",
        status: false,
        statusDelet: false
    },
    {
        id: 4,
        task: "ir a comer con mi mama",
        status: false,
        statusDelet: false
    },
    {
        id: 5,
        task: "jugar todos los dia con la mabi",
        status: false,
        statusDelet: false
    },
    {
        id: 6,
        task: "ir a comprar la RTX 3090",
        status: false,
        statusDelet: false
    },
    {
        id: 7,
        task: "acabar el proyecto de react js",
        status: false,
        statusDelet: false
    }
]


const TodoApp = () => {

    // ESTADOS
    const [data, setData] = useState(task)
    const [dataTask, setDataTask] = useState(task)
    const [paperBin, setPaperBin] = useState([])
    const [filterTask, setFilterTask] = useState('all')
    const [idInit, setIdInit] = useState(7)

    // FILTER Y RENDE DE TASK

    useEffect(() => {
        
        if(filterTask !== 'all' && data){
            if(filterTask !== 'paperBin'){
                const TaskRende = data.filter(task => task.status === JSON.parse(filterTask))
                setDataTask(TaskRende)
            }else{
                setDataTask(paperBin)
            }
        }else{
            setDataTask(data)
        }
        return () => {
            setDataTask(data)
        }
    },[filterTask, data, paperBin])

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

    const deletTask = (id, statusDelet) => {
        if(!statusDelet){
            const newDeletTask = data.filter(task => task.id !== id)
            data.forEach(task => {
                if(task.id === id){
                    task.statusDelet = true
                }
            })
            const newTaskPaperBin = data.filter(task => task.id === id)
            setPaperBin([...paperBin, ...newTaskPaperBin])
            setData(newDeletTask)
        }else{
            const taskPaperBin =  paperBin.filter(taskDelet => taskDelet.id !== id)
            setPaperBin([...taskPaperBin])
        }
    }

    const addNewTask = (newTask) => {
        const redundancy = data.some(task => task.task === newTask.task)
        if(newTask.task){
            if (!redundancy){
                const newId = generatorId(idInit)
                newTask.id = newId
                setData([newTask, ...data])
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

    const restoreTask = id => {
        paperBin.forEach(task => {
            if(task.id === id){
                task.statusDelet = false
                task.status = false
            }
        })
        const taskReestablished = paperBin.filter(task => task.id === id)
        const newPaperBin = paperBin.filter(task => task.id !== id)
        setPaperBin(newPaperBin)
        setData([...data, ...taskReestablished])
    }

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
                    <TodoList dataTask={dataTask} updateStatusTask={updateStatusTask} deletTask={deletTask} restoreTask={restoreTask} />
                </div>
            </div>
       </div>
    </div>
    )
}
export default TodoApp;