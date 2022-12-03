import React, { useState } from 'react'
import styles from "./App.module.css";

//components
import Header from './components/Header'
import List from './components/List'

function App() {
  

  return (
    <div className={styles.app}>
      <Header/>
      <List/>
    </div>
  )
}

export default App
