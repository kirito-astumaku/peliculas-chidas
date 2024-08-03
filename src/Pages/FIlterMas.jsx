import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const  MovieList = ({ movies }) => {
     const URL_img = 'https://image.tmdb.org/t/p/original'
    const [minRating, setMinRating] = useState(0);

    // Verifica si hay datos de películas antes de filtrar
    if (!movies || movies.length === 0) {
      return <p>No se encontraron películas.</p>;
    }
  
    const filteredMovies = movies.filter(movie => movie.vote_average >= minRating);
    return (
        <div style={{textAlign:"center"}}>
          <h2 style={{color:"white"}}>Películas</h2>
          <input style={{color:"white"}}
            type="range"
            min={0}
            max={10}
            step={0.1}
            value={minRating}
            onChange={e => setMinRating(parseFloat(e.target.value))}
          />
          <p style={{color:"white"}}>Calificación mínima: {minRating}</p>
          <ul>
            {filteredMovies.map(movie => (
                <div className="container mt-3" >
                 <div className='row' id='padre1' style={{width:"230%", display:"flex"}}>
                      <li key={movie.id}>
                      
                <div className='col-md-4 mb-3' key={movie.id} id='padre' style={{/* flexDirection:"row-reverse"   display:'flex'*/}}>
                <Link to={`/movie/${movie.id}`}>
               <img src={`${URL_img}${movie.poster_path}`} alt='' height={450} width='85%' />
               </Link>
                   <h4 style={{ color: 'white' }}>{movie.title}</h4>
                 <h3 style={{ color: 'white' }}>⭐Rating: {movie.vote_average}</h3>
                   <h3 style={{ color: 'white' }}>🎍Año: {movie.release_date}</h3>
                   </div>
                   
              </li>
                </div>
                </div>
         
              
            ))}
          </ul>
        </div>
      );
  
}

const Apps = () => {
    const [movies, setmoveis] = useState([])
    const[searchkey, setseacrhKey] = useState("")
    const [trailer, settrailer] = useState('null')
    const [movie, setmovie] = useState({ title:"loading movies"})
    const [playing, setplaying] = useState(false)

    const API = "https://api.themoviedb.org/3"
  const API_key = '7784654e88b1ef3568884755de9355cb'
  const IMAGES_padt = 'https://image.tmdb.org/t/p/original'
  const URL_img = 'https://image.tmdb.org/t/p/original'
  
    useEffect(() => {
        const  fetchMovies = async (searchkey) => {
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
  
       fetchMovies().then(data => setMovies(data.results)); 
    }, [])
  
    return (
      <div>
        {
        movies.length > 0 ? <MovieList movies={movies} 
        /> : <p>Cargando películas...</p>}
      </div>
    );
  };
  
  export default Apps;

