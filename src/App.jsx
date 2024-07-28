import './App.css'
import Barra from './Components/Navbar'
import React, { useEffect } from 'react';
import Casa from './Pages/Home';
import IFpalis from './Pages/IFpalis'



function App() {
   useEffect(() => {
    document.body.style.backgroundColor = '#213547'; // Cambia a cualquier color que desees
}, []); 

  return (
   
   <>
       <Barra/>
        <Casa/>  
    </>  
  )
}

export default App
