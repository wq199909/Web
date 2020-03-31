import React, {useState} from 'react'
import styles from "./index.css";
import picUrl from "../../assets/dog.jpeg"
export default function () {
    const [number, setNumber] = useState(0);
    return (
        <div>
        <h1>
           Number: {number}
        </h1>
        <img src={picUrl} alt=""/>
        <div className={styles.bg}></div>
        <button 
            className={styles.beauty_button}
            onClick={()=>{setNumber(number+1)}}>点击</button>
        </div>
    )
}
