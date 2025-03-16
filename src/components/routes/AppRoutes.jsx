import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Man from '../../pages/Man'
import Woman from '../../pages/Woman'
import Login from '../../pages/Login';
import RegistrationPage from '../../pages/RegistrationPage';
import CardBody from '../cards/CardBody.jsx';

const AppRoutes = () => {
  return (
   
        <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/men' element={<Man/>}/>
            <Route path='/women' element={<Woman/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='registration' element={<RegistrationPage/>}/>
            <Route path = '/home/cards' element={<CardBody/>}/>
        </Routes>
   
  )
}

export default AppRoutes