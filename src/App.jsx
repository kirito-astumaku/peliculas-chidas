import './App.css'
import Barra from './Components/Navbar'
import React, { useEffect } from 'react';



function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#213547'; // Cambia a cualquier color que desees
}, []);
  return (
    <div style={{background:"red"}}>
    <Barra/>
    </div>
  )
}

export default App
