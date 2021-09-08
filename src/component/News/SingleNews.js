/* eslint-disable no-undef */
import React from 'react';
import './SingleNews.css'
import { Link } from 'react-router-dom';

const SingleNews = (props) => {
    const {imageURL, title, name, date, time, textarea, _id} = props.news;
    // const { _id: id } = props.news;
    return (
        <Link target="_blank" to={"/news/"+_id} className="col-md-12 btn btn-outline-dark body">
                            <div className="row box">
                                <div className="col-md-4">
                                    <div className="img">
                                        <img src={imageURL} class="img-fluid" alt="" />
                                    </div>
                                </div> 
                                <div className="col-md-8">
                                    <h1>{title}</h1>
                                    <p>{time} at {date} <br/><small>Published on {name}</small> </p>
                                    <p></p>
                                    <p>{_id}</p>
                                    <p className="p">{textarea}</p>
                                    {/* <Link className="btn btn-outline-dark" target="_blank" to={"/news/"+_id}>Visit</Link> */}
                                    
                                </div>
                            </div>
                        </Link>
    );
};

export default SingleNews;