import './App.css'
import Barra from './Components/Navbar'
import React, { useEffect } from 'react';
import Casa from './Pages/Home';
import IFpalis from './Pages/IFpalis'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom" ;
import Apps from './Pages/FIlterMas'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Barra/>,
    children: [
      {
        path: "/",
        element: <Casa/>,
      },
      {
        path:"/movie/:id",
        element: <IFpalis/>,
      },
      {
        path:"/movie/FIlterMas",
        element: <Apps/>,
      }
    ],
  },
 
]);


function App() {
   useEffect(() => {
    document.body.style.backgroundColor = '#213547';
}, []); 

  return (
   
   <>
       <RouterProvider router={router}>
       
       </RouterProvider>
    </>  
  )
}

export default App
