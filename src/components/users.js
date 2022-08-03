/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext,useEffect } from 'react';
import { UserContext } from '../context/user.context';
import axios from 'axios';
import { useState ,useEffect } from 'react';


export default function User(){
    // const { baseURL } = useContext(UserContext);

async function getUsers(){
    try{
    const res=await axios.get('http://localhost:3333/user');
    let tempList = res.data.map((item) => {
        let user = {
            name:item.firstName+" "+item.lastNam,
            ameil:item.email
        }
        return user;
    })
    setUsersList(tempList)
}
catch(error){ console.log(error); }   
}
const [usersList,setUsersList] = useState();
useEffect(() => {
  getUsers();
}, [])
    return (
        <div className="details">
            All Users
            {usersList?.map((user) => {
                return<p>{user.name}</p>
            })}

            {/* {baseURL} */}
        </div>
    )
} 


