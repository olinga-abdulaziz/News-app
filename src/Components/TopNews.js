import * as React from 'react'
import './css/topmovies.css'


function TopMovies({title,image,description}){
    return(
        <div className='card'>
           <ul>
               <li className='li'>
                    <img src={image} alt='' />
                    <div className='descDiv'>
                    <font className='title'>{title}</font>
                    <p className='description'>{description}</p>
                    </div>
               </li>
           </ul>
           
        </div>
    )
}

export default TopMovies