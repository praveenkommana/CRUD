// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import StudentTable from './StudentTable'
import EditStudent from './EditStudent'
import ViewDetails from './ViewDetails'
import CreateStudent from './CreateStudent'

function App() {
  

  return (
    

    
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<StudentTable/>}></Route>
     <Route path="/student/create" element={<CreateStudent/>}></Route>
    <Route path="/student/edit/:studentid" element={<EditStudent/>}></Route>
    <Route path="/student/view/:studentid" element={<ViewDetails/>}></Route>  

     
      </Routes></BrowserRouter>
      

        

     
    
  )
}

export default App
