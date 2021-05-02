import React, { useState } from 'react';
import classes from './Register.module.css'
import LeftContainer from '../../Components/PageIndicator/PageIndicator'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import icon from '../../Assest/Icons/Register.svg'
import { useDispatch } from 'react-redux'
import { userCred } from '../../redux/reducer';
const eye = <FontAwesomeIcon icon={faEye} />;



export default function Register(props) {
    let currentUrl = props.location.pathname;
    const dispatch = useDispatch();

    const [passwordShownColor, setPasswordShownColor] = useState("inActive");
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = (e) => {

        setPasswordShown(passwordShown ? false : true);
        if (passwordShownColor === "inActive") {
            setPasswordShownColor("ActivePassword")

        }
        else {
            setPasswordShownColor("inActive")

        }
    };


    const { register, handleSubmit } = useForm(
       
    );

    const onSubmit  = (data) =>{
     dispatch(
        userCred({
            id:Date.now(),
            email:data.email,
            password:data.password
        })
     )
        alert("You are registered");
        props.history.push("/login")
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
                                            className={[classes.Input, classes.Name].join(' ')}
                                            name="username"
                                            type="text"
                                            placeholder="Name"
                                            {...register("username")}
                                            required
                                        />
                   </div>
                   <div className={classes.InputWrapper}>
                   <input
                                            className={[classes.Input, classes.Password].join(' ')}
                                            name="password"
                                            type={passwordShown ? "text" : "password"}
                                            placeholder="Password"
                                            {...register("password")}
                                            required
                                        />
                                         <i onClick={(e) => { togglePasswordVisiblity(e) }} className={passwordShownColor === "inActive" ? classes.EyeIcons : [classes.EyeIcons, classes.ActivePassword].join(' ')}>{eye}</i>
                   </div>
                   <div className={classes.BtnContainer}>
                   <button className={classes.Btn} type="submit">Register</button>
                   </div>
                
                </form>
            </div>
        </div>
    )
}
