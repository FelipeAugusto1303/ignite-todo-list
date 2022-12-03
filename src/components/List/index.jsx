import React, {useState} from 'react';

import styles from "./List.module.css";
import { PlusCircle } from 'phosphor-react';
import TaskList from '../TaskList';

function List() {

    const [tasksCreated, setTasksCreated] = useState(0);
    const [tasksDone, setTasksDone] = useState(0);
    const [taskList, setTaskList] = useState([]);
    const [text, setText] = useState("");


    function handleAddTask(event){
        event.preventDefault();

        if(event.target.task.value.length > 0){

            const body = {
                id: taskList.length,
                message: event.target.task.value,
                status: false
            }

            setTaskList(prev => [...prev, body]);
            setTasksCreated(prev => prev + 1);
            setText("")
            
        }
    }

    function handleCheck(task){
        if(!task.status){
            setTasksDone(prev => prev + 1);
        }
        else{
            setTasksDone(prev => prev - 1)
        }

        const taskIndex = taskList.indexOf(task);
        const newList = [...taskList]
        newList[taskIndex].status = !task.status

        setTaskList(newList)
    }

    function handleDelete(task){
        if(task.status){
            setTasksDone(prev => prev - 1);
        }
        setTasksCreated(prev => prev - 1);

        const taskIndex = taskList.indexOf(task);
        const newList = [...taskList]

        newList.splice(taskIndex,1);
        setTaskList(newList);
    }

  return (
    <div className={styles.listContainer}>
        <form onSubmit={handleAddTask} className={styles.formContainer}>
            <input name='task' value={text} onChange={(event) => setText(event.target.value)} type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>
                <span>Criar</span>
                <PlusCircle size={15} color="var(--gray-100)"/>
            </button>
        </form>
        <div className={styles.progressContainer}>
            <div>
                <span>Tarefas criadas</span>
                <span>{tasksCreated}</span>
            </div>
            <div>
                <span>Concluídas</span>
                <span>{tasksCreated > 0 ? `${tasksDone} de ${tasksCreated}`: tasksCreated}</span>
            </div>
        </div>
        <TaskList list={taskList} onCheck={handleCheck} onDelete={handleDelete}/>
    </div>
  );
}

export default List;