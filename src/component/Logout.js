import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import "./logout.css";

const Logout = () => {

    const user = useSelector(selectUser); 
    const dispatch = useDispatch();
    const handleLogout= (e) => {
        e.preventDefault();

        
        dispatch(logout());
    }
    

    return (
        <div className='logout'>
            <h1>welcome <span className='user__name'> {user.name}</span></h1><br />
            <h1>Your Email is: <span className='user__name'>{user.email}</span></h1><br />
            <h1>Your password is: <span className='user__name'>{user.password}</span></h1><br />
            <button className='logout__button' onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    );
}

export default Logout;