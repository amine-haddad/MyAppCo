import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileForm from './ProfileForm';
import '../styles/Profile.css';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [userId, setUserId] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`/api/users/${userId}`)
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
                setProfile(null);
                setError('Error fetching user profile');
            });
    }, [userId]);

    const handleProfileCreated = (id, newProfile) => {
        setUserId(id);
        setProfile(newProfile);
    };

    return (
        <div>
            {error && <div className="error">{error}</div>}
            {profile ? (
                profile.name ? (
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
                    <div>No profile found.</div>
                )
            ) : (
                <div>Loading...</div>
            )}
            <ProfileForm onSuccess={handleProfileCreated} />
        </div>
    );
};

export default Profile;