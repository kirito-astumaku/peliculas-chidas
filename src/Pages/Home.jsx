import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
          <Link to={`/movie/${movie.id}`}>
          <img src={`${URL_img}${movie.poster_path}`} alt='' height={450} width='75%' />
          </Link>
          <h4 style={{ color: 'white' }}>{movie.title}</h4>
          <h3 style={{ color: 'white' }}>⭐Rating: {movie.vote_average}</h3>
          <h3 style={{ color: 'white' }}>🎍Año: {movie.release_date}</h3>
        </div>
      ))
    )}
  </div> 
  <footer>
        <div class="footerContainer">
            <div class="socialIcons">
                <a href="https://www.facebook.com/profile.php?id=100055205468646" target='blank'><img src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-logo-icon-download-in-svg-png-gif-file-formats--fb-social-media-pack-logos-icons-675868.png?f=webp" alt=""  width={40}/></a>
                <a href="https://www.instagram.com/leon807_/"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="" width={40} /></a>
                <a href="https://x.com/ManuelMorenoDu3"><img src="https://img.freepik.com/vetores-gratis/novo-design-de-icone-x-do-logotipo-do-twitter-em-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722643200&semt=ais_hybrid" alt="" width={40} /></a>
                <a href="https://www.youtube.com/channel/UC8o2q3rjo-VzWsPclJNgPFQ"><img src="https://icons.veryicon.com/png/o/miscellaneous/alibaba-cloud-ui-icon-library/youtube-150.png" alt="" width={40} /></a>
            </div>
                
        </div>
        <div class="footerBottom">
            <p>Copyright &copy;2024; Designed by <span class="designer">Manuel</span></p>
        </div>
    </footer>
</div>
  )
}

export default Casa