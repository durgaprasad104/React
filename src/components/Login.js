import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = { email }; // In a real app, you'd validate and retrieve user info
        onLogin(userInfo);
        navigate('/dashboard');
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
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
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Login</button>
    </form>
</div>

    );
};

export default Login;
