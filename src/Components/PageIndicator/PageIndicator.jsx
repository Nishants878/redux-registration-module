import React,{ useEffect, useState } from 'react'
import classes from './PageIndicator.module.css'
import icon from '../../Assest/Icons/Register.svg'
import SecondIcon from '../../Assest/Icons/Login.svg'
import { Link } from 'react-router-dom';
export default function PageIndicator(props) {
   
    const [title, setTitle] = useState("Register with us");
    const [secondaryTitle, setSecondaryTitle] = useState("If you already have an account you can");
    const [linkDestination, setLinkDestination] = useState("/login");
    const [linkTitle, setLinkTitle] = useState("Sign in");
    const [picture, setPicture] = useState(false)
    const CurrentUrl = props.currentUrl

    useEffect(()=>{
          if(CurrentUrl === "/login"){
              setTitle("Please Sign In!");
              setSecondaryTitle("If you don't have an account you can");
              setLinkDestination("/");
              setLinkTitle("Register")
              setPicture(true)
          }else{
              setTitle("Register with us");
              setSecondaryTitle("If you already have an account you can");
              setPicture(false)
          }
    },[CurrentUrl])
 
    
    return (
        <div className={classes.MainContainer}>
              <h1 className={classes.Title}>
              {title}
            </h1>
           <div className={classes.SecondaryFlex}>
           <h3 className={classes.SecondaryTitle}>
             {secondaryTitle} <Link to={linkDestination} className={classes.SignIn}>{linkTitle}!</Link>
            </h3>
            <div className={classes.ImageContainer}>
                <img src={[picture?SecondIcon:icon]} alt="svg"/>
            </div>
           </div>
        </div>
    )
}
