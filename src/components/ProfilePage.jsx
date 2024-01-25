import React, { useState } from 'react';
import { userObjectStore } from '../services/db/UserObjectStore'
import { idbManager } from '../services/db/IndexedDatabaseManager'

const UserProfile = ({ userData }) => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = async (event) => {
        const file = event.target.files[0];

        // Convert the image file to a Blob
        const blob = await getBlobFromImageFile(file);

        // Store the Blob in the image object store
        userData[profileImage] = blob
        await userObjectStore.update(userData);

        // For simplicity, we'll just set it in state for display purposes
        setProfileImage(URL.createObjectURL(blob));
    };

    const getBlobFromImageFile = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(new Blob([reader.result], { type: file.type }));
            };
            reader.readAsArrayBuffer(file);
        });
    };

    console.log(`UserProfileComponent`, userData)
    return (
        <div className="container mt-4">
            <h2>User Profile</h2>
            <div className="mb-3 flex col">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="img-fluid"
                />
                <label htmlFor="imageInput" className="form-label">
                    Change Profile Image
                </label>
                <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
            <div className="mb-4">
                <h3>{`${userData.firstName} ${userData.lastName}`}</h3>
                <p>Email: {userData.email}</p>
                <p>Date of Birth: {userData.dob}</p>
                <p>Gender: {userData.gender}</p>
            </div>
        </div>
    );
};

export default UserProfile;
