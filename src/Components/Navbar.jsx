
import React from 'react'
import './style.css';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Barra = () => {
  const API = "https://api.themoviedb.org/3"
  const API_key = '7784654e88b1ef3568884755de9355cb'
  const IMAGES_padt = 'https://image.tmdb.org/t/p/original'
  const URL_img = 'https://image.tmdb.org/t/p/original'

  const [moveis, setmoveis] = useState([])
  const[searchkey, setseacrhKey] = useState("")
  const [trailer, settrailer] = useState('null')
  const [movie, setmovie] = useState({ title:"loading movies"})
  const [playing, setplaying] = useState(false)

  const feachmovis = async (searchkey) => {
    const type = searchkey ? "search" : "discover";
    try {
      const { data: { results } } = await axios.get(`${API}/${type}/movie`, {
        params: {
          api_key: API_key,
          query: searchkey, 
        },
      });
      setmoveis(results);
     setmovie(results)  ; 
    } catch (error) {
      console.error("Error al obtener las películas:", error);
    }
  };


  const seachmovises = (e) =>{
     e.preventDefault(),
     feachmovis(searchkey)
  }


  useEffect (() =>{
    feachmovis();
  },[])

  return (
    <div className="padre">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pelicualas.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Recomendaciones</a>
        </li>
        <li className="nav-item  dropdown ">
          <a className="nav-link  dropdown -toggle" href="#" role="button" data-bs-toggle=" dropdown" aria-expanded="false">
            Nuevos Titulos
          </a>
          
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Clasicos</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
 <Outlet></Outlet>
</div>
  )
}

export default Barra