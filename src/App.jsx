import './App.css'
import Barra from './Components/Navbar'
import React, { useEffect } from 'react';
import Casa from './Pages/Home';
import IFpalis from './Pages/IFpalis'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom" ;
import Foters from './Components/Foter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Barra/>,
    /* path: "/",
    element: <Foters/> */ 
    children: [
      {
        path: "/",
        element: <Casa/>,
      },
      {
        path: "/",
        element: <Foters/>,
      },
      {
        path:"/Iformación/:id",
        element: <IFpalis/>,
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
