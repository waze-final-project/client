/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { UserContext } from '../context/user.context';
import axios from 'axios';


export default function User(){

    const { baseURL } = useContext(UserContext);

async function getUsers(){
    await axios.get('')
}

    return (
        <div className="details">
            All Users

            {baseURL}
        </div>
    )
} 


