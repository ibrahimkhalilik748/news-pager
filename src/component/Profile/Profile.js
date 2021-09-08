import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Post from '../Post/Post';
import './Profile.css';

const Profile = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        fetch(`https://mighty-ridge-57000.herokuapp.com/isAdmin`,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: loggedInUser.email })
            })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])

    return (
        <div className='profile container'>
            <br />
            <img src={loggedInUser.photoURL} alt="" />
            <h1>{loggedInUser.name}</h1>
            <br />
            { admin &&
                <Post />
            }
            
        </div>
    );
};

export default Profile;