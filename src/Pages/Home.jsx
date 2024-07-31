import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';


const Casa = () => {

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
      setmovie(results);
    } catch (error) {
      console.error("Error al obtener las películas:", error);
    }
  };


  const seachmovises = (e) => {
    e.preventDefault();
    if (searchkey.trim() === "") {
      
      feachmovis(); 
    } else {
      feachmovis(searchkey); 
    }
  };


  useEffect (() =>{
    feachmovis();
  },[])


  return (
    <div className="container mt-3" >
      <div id='padre_principal' >
        <form className="d-flex" role="search" onSubmit={seachmovises}>
        <input id='barra' className="form-control me-3" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setseacrhKey(e.target.value) }/>
      <button id='btn' className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
      </div>
      <div className='row' id='padre1'>
    {moveis.length === 0 ? (
      <div className='col-md-12'>
        <p style={{color:"white"}}>Lo sentimos pero no encontrmos esa pelicula o serie</p>
        <img src="https://img.freepik.com/vector-premium/advertencia-error-sistema-operativo-ventana-mensaje-emergente-ventana-dialogo-falla-sistema-diseno-plano_812892-54.jpg" alt="" width={600}/>
      </div>
    ) : (
      moveis.map((movie) => (
        <div className='col-md-4 mb-3' key={movie.id} id='padre'>
          {/* Renderiza detalles de la película aquí */}
          <img src={`${URL_img}${movie.poster_path}`} alt='' height={450} width='75%' />
          <h4 style={{ color: 'white' }}>{movie.title}</h4>
          <h3 style={{ color: 'white' }}>⭐Rating: {movie.vote_average}</h3>
          <h3 style={{ color: 'white' }}>🎍Año: {movie.release_date}</h3>
          <h3 style={{ color: 'white' }}>{movie.id}</h3>
        </div>
      ))
    )}
  </div> 
</div>
  )
}

export default Casa