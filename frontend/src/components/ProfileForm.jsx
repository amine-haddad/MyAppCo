import React, { useState } from 'react';
import axios from 'axios';

const ProfileForm = ({ onSuccess }) => {
    const [newProfile, setNewProfile] = useState({});
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setNewProfile({
            ...newProfile,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://php:8000/api/users', JSON.stringify(newProfile), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('User created with ID:', response.data.id);
            onSuccess(response.data.id, newProfile);
            setError(null);
        })
        .catch(error => {
            console.error('Error creating user profile:', error);
            setError('Error creating user profile');
        });
    };

    return (
        <div className="form-container">
            {error && <div className="error">{error}</div>}
            <h2>Create New Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={newProfile.name || ''}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={newProfile.title || ''}
                        onChange={handleChange}
                        placeholder="Title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={newProfile.bio || ''}
                        onChange={handleChange}
                        placeholder="Bio"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={newProfile.email || ''}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={newProfile.phone || ''}
                        onChange={handleChange}
                        placeholder="Phone"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="github_url">GitHub URL</label>
                    <input
                        type="url"
                        id="github_url"
                        name="github_url"
                        value={newProfile.github_url || ''}
                        onChange={handleChange}
                        placeholder="GitHub URL"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin_url">LinkedIn URL</label>
                    <input
                        type="url"
                        id="linkedin_url"
                        name="linkedin_url"
                        value={newProfile.linkedin_url || ''}
                        onChange={handleChange}
                        placeholder="LinkedIn URL"
                    />
                </div>
                <button type="submit">Create Profile</button>
            </form>
        </div>
    );
};

export default ProfileForm;