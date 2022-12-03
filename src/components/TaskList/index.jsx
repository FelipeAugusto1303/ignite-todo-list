import React from 'react';

import styles from "./TaskList.module.css";
import clipboardImage from "../../assets/Clipboard.png";
import Item from '../Item';

const EmptyList = () => {
    return(
        <div className={styles.clipboard}>
            <img src={clipboardImage} />
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}

const List = ({ list, onCheck, onDelete }) => {
    return(
        <>
            {list.map(item => {
                return (
                    <div className={styles.task} key={item.id}>
                        <Item task={item} onCheck={onCheck} onDelete={onDelete}/>
                    </div>
                ) 
            })}
        </>
    )
}

function TaskList({ list, onCheck, onDelete }) {
  return(
    <div className={styles.tasksContainer}>
        {list.length === 0 ? <EmptyList/>:<List list={list} onCheck={onCheck} onDelete={onDelete}/>}
    </div>
  );
}

export default TaskList;