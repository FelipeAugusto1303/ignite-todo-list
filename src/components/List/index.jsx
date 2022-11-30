import React from 'react';

import styles from "./List.module.css";
import { PlusCircle } from 'phosphor-react';

function List() {
  return (
    <div className={styles.listContainer}>
        <form onSubmit={() => console.log("opa")} className={styles.formContainer}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>
                <span>Criar</span>
                <PlusCircle size={15} color="var(--gray-100)"/>
            </button>
        </form>
    </div>
  );
}

export default List;