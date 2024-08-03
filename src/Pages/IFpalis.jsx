import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import './style.css';
import YouTube from 'react-youtube'



function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const API = "https://api.themoviedb.org/3"
  const API_key = '7784654e88b1ef3568884755de9355cb'
  const IMAGES_padt = 'https://image.tmdb.org/t/p/original'
  const URL_img = 'https://image.tmdb.org/t/p/original'

  const [moveis, setmoveis] = useState([])
  const[searchkey, setseacrhKey] = useState("")
  const [trailer, settrailer] = useState('null')
  const [movie, setmovie] = useState({ title:"loading movies"})
  const [playing, setplaying] = useState(false)


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axios.get(`${API}/movie/${id}`, {
          params: {
            api_key: API_key,
            append_to_response: 'videos', 
          },
        });
        setMovieDetails(data); 
      } catch (error) {
        console.error('Error al obtener los detalles de la película:', error);
      }
      
    };

    fetchMovieDetails(); 
    
  }, [id]); 




    return (
      <div className='intesa'>
      {movieDetails ? (
        <div className='padre1'>
          <div className='div2'>
            <h1>{movieDetails.title}</h1>
            <br />
            <h2 style={{ textAlign: "left" }}>Sinopsis:</h2>
            <p>{movieDetails.overview}</p>
            <h2>Recuento Votos: {movieDetails.vote_count}</h2>
            <br />
            <h2>Año de estreno: {movieDetails.release_date}</h2>
            <img id='imagenes'  src={`${URL_img}${movieDetails.backdrop_path}`} height={500} />
            <br />
          </div>
          <div>
               <img  src={`${URL_img}${movieDetails.poster_path}`} alt="" height={1000} width="100%" />
            </div>
        </div>
      ) : (
        <p>Los detalles de la película no están disponibles.</p>
      )}
    </div>
        

    );
      
    
  
}


export default MovieDetails;