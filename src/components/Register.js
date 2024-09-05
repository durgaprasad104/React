import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/register/", {
                name,
                email,
                password,
            });
            
            if (res.data === "already exist") {
                alert("Already have an account");
            } else if (res.data === "not exist") {
                navigate('/dashboard');
            }
        } catch (e) {
            alert('Authentication Revoked...');
            console.log(e);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
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
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={{ width: '300px', padding: '10px', fontSize: '16px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Register</button>
            </form>
        </div>
    );
};

export default Register;