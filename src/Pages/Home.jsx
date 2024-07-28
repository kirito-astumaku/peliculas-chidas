import movies from './movies.json'
import './style.css';



const Casa = () => {

console.log(movies)



  return (
    <div className='padre1'>
        {
          movies.map((movies) =>{
            
            const imageUrl = "https://image.tmdb.org/t/p/w300" + movies.poster_path;
                
            return(
              <>
              <div className='padre2'>
                 <img className='imagenes' src={imageUrl} alt={movies.original_title} />
                 <h1 style={{color:'white', fontSize:'130%'}}>{movies.title}</h1> 
                 <h1 style={{color:'white', fontSize:'130%'}}>⭐{movies.vote_average}</h1>
               </div>          
              </>
               
            )
          })
        }
   </div>

  )
}

export default Casa
