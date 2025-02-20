import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Man from '../../pages/Man'
import Woman from '../../pages/Woman'
import Login from '../../pages/Login';
const AppRoutes = () => {
  return (
   
        <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/men' element={<Man/>}/>
            <Route path='/women' element={<Woman/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
   
  )
}

export default AppRoutes