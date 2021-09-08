import React from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        const addService = {
            name: data.name,
            email: data.email,
        };
        const url = `https://mighty-ridge-57000.herokuapp.com/addAdmin`;


        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => console.log('server side response', res))
            e.target.reset()
    };
    return (
        <div>
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <h1>Add Admin</h1>
                <input className="input"{...register("name")} type="text" placeholder="Name" />
                <input className="input"{...register("email")} type="email" placeholder="Email" />
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Admin;