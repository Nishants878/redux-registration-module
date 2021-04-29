import React, {useState, useEffect} from 'react'
import classes from './Topbar.module.css'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
export default function Topbar(props) {
     
    
    
    
    const isLoggedIn = useSelector(state => state.Logged);
    const [headerSign, setHeaderSign] = useState(false) 
    const dispatch = useDispatch();
    useEffect(()=>{
       if(isLoggedIn === true){
           setHeaderSign(true)
       }else{
           setHeaderSign(false)
       }
    },[isLoggedIn])
      
     const handleLogout = () =>{
        setHeaderSign(false);
        dispatch({
            type:"User_Logged",
            payload:false
          
        });
      
    
     }

    return (
        <div className={classes.MainContainer}>
       <div className={classes.NavBar}>
           <div className={classes.LeftFlexContainer}>
                 <div className={classes.NavMenuWrapper}>
                 <Link className={classes.IconAndLinkWrapper} to="/">
                    
                    <p className={classes.PageLinkName}>Home</p>
                    </Link>
                    <Link className={classes.IconAndLinkWrapper} to="#">
                    
                    <p className={classes.PageLinkName}>Contact Us</p>
                 
                    </Link>
                    <Link className={classes.IconAndLinkWrapper} to="#">
                    
                    <p className={classes.PageLinkName}>Help</p>
                 
                    </Link>
                 </div>
           </div>
           <div className={classes.RightFlexContainer}>
           <div className={[headerSign?classes.NavHidden:classes.NavMenuWrapper]}>
                 <Link className={classes.IconAndLinkWrapper} to="/login">
                    
                    <p className={classes.PageLinkName}>Sign In</p>
                    </Link>
                    <Link className={classes.IconAndLinkWrapper} to="/">
                    
                    <p className={classes.PageLinkName}>Register</p>
                 
                    </Link>
                   
                 </div>
                 <div className={[headerSign?classes.ShowLogout:classes.LogoutSegment]}>
                 <Link  to="/login" className={classes.IconAndLinkWrapper} >
                    
                    <p onClick={handleLogout} className={classes.PageLinkName}>Logout</p>
                 
                    </Link>
                 </div>
           </div>
       </div>
            
        </div>
    )
}
