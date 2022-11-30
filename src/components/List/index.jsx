import React, {useState} from 'react';

import styles from "./List.module.css";
import { PlusCircle } from 'phosphor-react';
import TaskList from '../TaskList';

function List() {

    const [tasksCreated, setTasksCreated] = useState(0);
    const [tasksDone, setTasksDone] = useState(0);
    const [taskList, setTaskList] = useState([]);

  return (
    <div className={styles.listContainer}>
        <form onSubmit={() => console.log("opa")} className={styles.formContainer}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
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
        <TaskList list={taskList}/>
    </div>
  );
}

export default List;