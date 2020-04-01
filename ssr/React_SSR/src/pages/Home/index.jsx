import React, {useState} from 'react'
import styles from "./index.css";
import picUrl from "../../assets/dog.jpeg"
import { increase, decrease } from '../../store/action/couter';
import { connect } from 'react-redux';
const Counter  = function ({number, onIncrease, onDecrease}) {
    return (
        <div>
        <h1>
           Number: {number}
        </h1>
        <button 
            className={styles.beauty_button}
            onClick={onIncrease}>加</button>
        <button 
            className={styles.beauty_button}
            onClick={onDecrease}>减</button>
        <div className={styles.bg}></div>
        <img src={picUrl} alt=""/>
        </div>
    )
}
function mapStateToProps(state){
    return {
        number: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrease(){
            dispatch(increase())
        },
        onDecrease(){
            dispatch(decrease());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);