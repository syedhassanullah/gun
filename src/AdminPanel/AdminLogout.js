import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

import { useAuth } from '../AuthContext';


export default function AdminLogout() {


    const {Logoutuser} = useAuth();  
  useEffect(() =>{
    Logoutuser();
  },[Logoutuser])
  return <Navigate to='/adminlogin'/>;
}
