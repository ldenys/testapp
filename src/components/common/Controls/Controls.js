import React from "react";
import styles from "./Controls.module.css";

export const Button = (props) => {
    return <button onClick={props.onClick} className={styles.defaultBtn}>{props.children}</button>
}


