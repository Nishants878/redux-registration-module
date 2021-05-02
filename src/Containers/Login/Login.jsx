import React, { useState } from 'react';
import LeftContainer from '../../Components/PageIndicator/PageIndicator'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import classes from './Login.module.css'
import icon from '../../Assest/Icons/Register.svg'
import {useSelector,useDispatch } from 'react-redux'
import { userStatus, userSessionId } from '../../redux/reducer'


const eye = <FontAwesomeIcon icon={faEye} />;


export default function Login(props) {
    const [passwordShownColor, setPasswordShownColor] = useState("inActive");
    
    let currentUrl = props.location.pathname;
    
    const userData = useSelector(state => state.userCredentials)
     
    const dispatch = useDispatch();
  
    const { register, handleSubmit } = useForm(
        // {
        //     resolver:yupResolver(schema),
        // }
    );

    const onSubmit  = (data) =>{
       const inputData = data.email;
       const inputPass = data.password;
      const storeCredEmail = userData.find((user) => user.email === inputData);
      const storeCredPass = userData.find((user) => user.password === inputPass);
        
    
    

     
      
      if(storeCredEmail && storeCredPass){
       
        var tempObj = userData.filter(obj =>{
            return obj.email === inputData
        });
       const aObj = tempObj[0];
       console.log(aObj)
       const identificationId = aObj.id;
      
       
         dispatch(
            userStatus({
                isLoggedIn:true
            })
          
         );
         dispatch(
             userSessionId({
                sessionId:identificationId
             })
         )
        
         props.history.push("/dashboard");
      
      }else{
          alert("Enter correct details")
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
