import React from 'react';
import styles from "./Item.module.css";
import { Check, Trash } from 'phosphor-react';

const RadioButton = ({status, task, onCheck}) => {
    return(
        <div onClick={() => onCheck(task) }style={{cursor: "pointer"}}>
        {status ? 
            <div className={styles.checked}>
                <Check size={12} color="var(--gray-100)"/>
            </div>:
            <div className={styles.unchecked}/>
        }
        </div>
    );
}

function Item({ task, onDelete, onCheck }) {
    return (
        <div className={styles.itemContainer}>
            <RadioButton status={task.status} task={task} onCheck={onCheck}/>
            <span className={task.status ? styles.taskDone:styles.taskUndone}>{task.message}</span>
            <Trash size={18} style={{cursor: "pointer"}} onClick={() => onDelete(task)} color="var(--gray-300)"/>
        </div>
    );
}

export default Item;