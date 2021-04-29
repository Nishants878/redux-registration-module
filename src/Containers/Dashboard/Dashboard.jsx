import React,{useEffect} from 'react'
import classes from './Dashboard.module.css';
import MainForm from '../../Components/MainForm/MainForm'
export default function Dashboard() {

    useEffect(()=>{
       document.title="Dashboard"
    })
    return (
        <div className={classes.MainContainer}>
            <MainForm/>
        </div>
    )
}
