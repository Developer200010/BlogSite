import { useState } from 'react'
import './App.css'
import SignIn from './auth/SignIn'
import {Route,Routes} from 'react-router-dom'
import SignUp from './auth/SignUp'
import Home from './components/body/Home'
import SinglePage from './components/body/pages/SinglePage/SinglePage'
import UpdatePage from './components/body/pages/UpdatePage/UpdatePage'
import PostPage from './components/body/pages/PostPage/PostPage'

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/user/home' element={<Home/>}/>
      <Route path='/post/:id' element={<SinglePage/>}/>
      <Route path='/user/update' element={<UpdatePage/>}/>
      <Route path='/user/upload' element={<PostPage/>}/>
     </Routes>
    </>
  )
}

export default App
