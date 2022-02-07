import * as React from 'react'
import './home.css'
import TopMovies from '../Components/TopNews'
import axios from 'axios'
import { useState,useEffect } from 'react'

function Home(){

    const [article,setArticle]=useState([])
  
    useEffect(()=>{
        getHeadlines()
    },[])



    function getHeadlines() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f1f175fa17c145aa90329748ae66d2fa').then((res)=>{
            setArticle(res.data.articles)
        })
    }


    return(
        <div className='container'>
           <div style={{display:'flex',paddingTop:'10px',paddingBottom:'10px'}}><h4>Top Headlines</h4> <form className='form'><input type='search' placeholder='Search news' className='search'/><button>Search</button></form></div>
           <hr />
           {article.map((news)=>{
               return(
                <TopMovies key={article.title} image={news.urlToImage} title={news.title} description={news.description} />
               );
           })}
           
        </div>
    )
}

export default Home