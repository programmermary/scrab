import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Man from '../../pages/Man'
import Woman from '../../pages/Woman'
const AppRoutes = () => {
  return (
   
        <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/men' element={<Man/>}/>
            <Route path='/women' element={<Woman/>}/>
        </Routes>
   
  )
}

export default AppRoutes