import React, { useEffect, useState } from 'react';
import SingleNews from '../News/SingleNews';
import './Home.css'
import Marquee from './Marquee';

const Home = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('https://mighty-ridge-57000.herokuapp.com/paper')
            .then(res => res.json())
            .then(data => setNews(data))

    }, [])
    return (
        <div className="home">
            <Marquee />
            <div className="container">

                <div className="row">
                    {
                        news.map(news => <SingleNews news={news}></SingleNews>)
                    }
                </div><br /><br />
            </div>
        </div>
    );
};

export default Home;