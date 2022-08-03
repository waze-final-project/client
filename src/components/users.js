/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { UserContext } from '../context/user.context';


export const User = () => {

    const { baseURL } = useContext(UserContext);


    return (
        <div className="details">
            User
            {baseURL}
        </div>
    )
} 


