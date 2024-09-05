import React, { useState } from 'react';

const MyAccount = ({ user, setUser }) => {
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email);
    const [gender, setGender] = useState(user.gender || '');
    const [profilePicture, setProfilePicture] = useState(user.profilePicture || '');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleUpdate = () => {
        if (newPassword !== confirmNewPassword) {
            alert('New passwords do not match.');
            return;
        }

        // Update user information (excluding password handling logic for simplicity)
        setUser({ name, email, gender, profilePicture });
        alert('Profile updated successfully!');
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            {profilePicture && (
                <div style={{ marginBottom: '20px' }}>
                    <img
                        src={profilePicture}
                        alt="Profile"
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '3px solid #ccc'  // Optional: adds a border around the image
                        }}
                    />
                </div>
            )}

            <h1>My Account</h1>
            
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    style={{ width: '300px', padding: '10px', fontSize: '16px' }}
                />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    style={{ width: '300px', padding: '10px', fontSize: '16px' }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{ width: '320px', padding: '10px', fontSize: '16px' }}
                >
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    style={{ width: '320px', padding: '10px', fontSize: '16px' }}
                />
            </div>

            <h3>Password Management</h3>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Current Password"
                    style={{ width: '300px', padding: '10px', fontSize: '16px' }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                    style={{ width: '300px', padding: '10px', fontSize: '16px' }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    placeholder="Confirm New Password"
                    style={{ width: '300px', padding: '10px', fontSize: '16px' }}
                />
            </div>

            <button onClick={handleUpdate} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Update
            </button>
        </div>
    );
};

export default MyAccount;
