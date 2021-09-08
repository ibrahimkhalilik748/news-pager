import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './News.css'

const News = (props) => {
    // const id = props.news; 
    const { _id } = useParams()
    console.log(_id)
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`https://mighty-ridge-57000.herokuapp.com/paper/${_id}`)
            .then(res => res.json())
            .then(data => setNews(data))
        // console.log(data)
    }, [_id])

    return (
        <div className="news container">
            {
                news.map(news =>
                    <div className="row boxs">
                        <div className="col-md-5">
                            <img className="img-fluid" src={news.imageURL} alt="" />
                        </div>
                        <div className="col-md-7">
                            <h1>{news.title}</h1>
                            <br />
                            <p className="name"><b>@{news.name}</b></p>
                            <p className="date">Published: {news.date}, {news.time}</p>
                            <br />
                            <p>{news.textarea}</p>

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default News;