import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Post.css'
import { userContext } from '../../App';

const Post = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState();

    const onSubmit = (data, e) => {
        const addService = {
            title: data.title,
            name: loggedInUser.name,
            date: data.date,
            time: data.time,
            textarea: data.textarea,
            imageURL: imageURL,
            servicePrice: data.servicePrice
        };
        const url = `https://mighty-ridge-57000.herokuapp.com/addPaper`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => {
                console.log('server side response', res)
                window.location.href = "/home"
            })
        e.target.reset()
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '4a163627099e61dacc4c10b56f1c0c29');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input className="input" type="name" placeholder="Name"  {...register("name", { required: true })} /> */}
                <input className="input" type="title" placeholder="Title"  {...register("title", { required: true })} />
                <input className="input" type="time" placeholder="Time"  {...register("time", { required: true })} />
                <input className="input" type="date" placeholder="Date"  {...register("date", { required: true })} /> <br />
                <textarea className="input" type="text" placeholder="text"  {...register("textarea", { required: true })} /><br />
                <input className="input" {...register("serviceImg", { required: true })} type="file" onChange={handleImageUpload} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="btn btn-outline-dark" type="submit" />
            </form>
        </div>
    );
};


// ReactDOM.render(<Post />, document.querySelector('.Post'));

export default Post;