import React from 'react';


import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../_actions/User_action';


const RightMenu = (props) => {
  const NaviGate = useNavigate()
    const user =useSelector(state =>  state.user)
    const dispatch =useDispatch()
   
    const logoutHandler = () => {
      let body = {
        email: null,
        password: null
      }
      
      dispatch(logoutUser(body)).then(response => {
          if (response.payload.logoutsuccess) {
            NaviGate("/login");
          } else {
            alert('Log Out Failed')
          }
        });
      };
      if (user.userData && !user.userData.isAuth) {
        return (
            <span>
           <a href="/login">Signin</a>
         
          <a href="/register">Signup</a>
            </span>
         
          
        )
      } else {
        return (
          
              <span>
                 <a href='/product/upload'>upload</a>
           <a onClick={logoutHandler}>Logout</a>
              </span>
            
           
          
          
        )
      }

 

    }
export default RightMenu;