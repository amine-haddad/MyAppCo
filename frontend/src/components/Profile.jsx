import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [userId, setUserId] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`/api/users/${userId}`, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            setProfile(response.data);
        })
        .catch(error => {
            console.error('Error fetching user profile:', error);
            setProfile(null);
            setError('Error fetching user profile');
        });
    }, [userId]);

    return (
        <div>
            {error && <div className="error">{error}</div>}
            {profile ? (
                <>
                    <h1>{profile.name}</h1>
                    <p>Title: {profile.title}</p>
                    <p>Bio: {profile.bio}</p>
                    <p>Email: {profile.email}</p>
                    <p>Phone: {profile.phone}</p>
                    <p>GitHub: <a href={profile.github_url}>{profile.github_url}</a></p>
                    <p>LinkedIn: <a href={profile.linkedin_url}>{profile.linkedin_url}</a></p>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Profile;
