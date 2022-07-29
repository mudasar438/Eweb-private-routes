import React, { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


function get(){
    
    var getJson = localStorage.getItem('token')
    if(getJson){
       const arrayName = JSON.parse(getJson)
       return  arrayName;
    }
}


const Logout = () => {
  const navigate =  useNavigate()
    const [token,setToken]=useState(get())

    console.log("before SetToken ",token)


    useEffect(()=>{
       
        localStorage.removeItem('token')
        setToken(get())
        console.log("after SetToken ",token)
      })
      
      navigate('/')

    






  return (
    <div>Logout</div>
  )
}

export default Logout
