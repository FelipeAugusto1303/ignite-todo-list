import React from 'react';

import styles from "./TaskList.module.css";
import clipboardImage from "../../assets/Clipboard.png";

const EmptyList = () => {
    return(
        <>
        <img src={clipboardImage} />
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
        </>
    )
}

function TaskList({ list }) {
  return(
    <div className={styles.tasksContainer}>
        {list.length === 0 ? <EmptyList/>:null}
    </div>
  );
}

export default TaskList;