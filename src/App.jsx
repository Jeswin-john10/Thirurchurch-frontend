import { useState } from 'react'
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Admin from './pages/Admin'
import Login from './pages/Login'
function App() {

  return (
    <>
        <Header/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Admin' element={<Admin admin={true}/>}/>
<Route path='/Login' element={<Login/>}/>

  </Routes>
    </>
  )
}

export default App
