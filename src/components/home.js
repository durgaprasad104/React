import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to Career Pathway Advisor</h1>
            <h3>If you see the content please register and access this content</h3>
            <p>Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to continue.</p>
            <p>If you are new, please <Link to="/register">Register</Link>.</p>
        </div>
    );
};

export default Home;
