import React from 'react'
import { useState, useEffect } from 'react'
import './NewsCard.css'
import axios from 'axios'

export const NewsCard = () => {
    const [news, setNews] = useState([])
    useEffect( ()=>{
axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0d9ac691e4fb4516a8b5376b40f48978").
then((res)=>{
    console.log(res);
    setNews(res.data.articles)
})
    }, [])
  return (
<>
<div className="card-box" >
       {
        news.slice(0,6).map((val)=>{
            return(
                <div className="cardbox" >
                <img src={val.urlToImage} alt="" />
                <div className="cardbox-overlay">
                    <h3 className="card-title">{val.title}</h3>
                </div>
            </div>
            )
        })
       }
    </div>
</>
  )
}
