import React, { useState } from 'react';
import LeftContainer from '../../Components/PageIndicator/PageIndicator'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import classes from './Login.module.css'
import icon from '../../Assest/Icons/Register.svg'
import {useSelector, useDispatch} from 'react-redux'



const eye = <FontAwesomeIcon icon={faEye} />;


export default function Login(props) {
    const [passwordShownColor, setPasswordShownColor] = useState("inActive");
    let currentUrl = props.location.pathname;
    console.log(currentUrl)
    const userData = useSelector(state => state.user)
    console.log(userData)
   const dispatch = useDispatch();
    const { register, handleSubmit } = useForm(
        // {
        //     resolver:yupResolver(schema),
        // }
    );

    const onSubmit  = (data) =>{
       const inputData = data.email;
       const inputPass = data.password
       if(userData.some(item => item.email == inputData && item.password == inputPass)){
           dispatch({
               type:"User_Logged",
               payload:true

           })
        props.history.push("/dashboard");
         
       }else{
           alert("Kindly enter correct details")
       }
    }


    return (
        <div className={classes.MainContainer}>
        <div className={classes.LeftContainer}>
      <LeftContainer currentUrl={currentUrl}/>
      
        </div>
        <div className={classes.RightContainer}>
            <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
               <div className={classes.InputWrapper}>
                                  <input
                                        className={[classes.Input, classes.Email].join(' ')}
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                         {...register("email")}
                                        required
                                    />
               </div>
           
               <div className={classes.InputWrapper}>
               <input
                                        className={[classes.Input, classes.Password].join(' ')}
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        {...register("password")}
                                        required
                                    />
                                      <i  className={passwordShownColor === "inActive" ? classes.EyeIcons : [classes.EyeIcons, classes.ActivePassword].join(' ')}
                                    >{eye}</i>
               </div>
               <div className={classes.BtnContainer}>
               <button className={classes.Btn} type="submit">Sign in</button>
               </div>
            
            </form>
        </div>
    </div>
    )
}
