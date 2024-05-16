import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp'
import { Dashboard } from './Pages/Dashboard'
import { SingleTrip } from './Pages/SingleTrip'


function App() {
 

  return (
    <>
     
     
     <BrowserRouter>
         <Routes>

            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/' element={<SignIn/>}></Route>
           
            <Route path='/dashboard/:userId' element={<Dashboard/>}></Route>
            <Route path='/singleTrip/:tripId/:groupID/:userId' element={<SingleTrip/>}></Route>
            
         </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
