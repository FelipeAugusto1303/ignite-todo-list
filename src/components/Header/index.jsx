import React from 'react';

import styles from "./Header.module.css";

import rocketLogo from "../../assets/rocket.svg";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={rocketLogo} />
      <span>to</span>
      <span>do</span>
    </div>
  );
}

export default Header;