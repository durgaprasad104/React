import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/dashboard';
import MyAccount from './components/myaccount';
import After10thPage from './components/After10thPage.js';
import IntermediatePage from './components/IntermediatePage';
import DiplomaPage from './components/DiplomaPage';
import BTechPage from './components/BTechPage';
import MTechPage from './components/MTechPage';
import DegreePage from './components/DegreePage.js';
import ITIPage from './components/ITIPage.js';
import AfterIntermediateGroupPage from './components/AfterIntermediateGroupPage.js';
import ParamedicalCourses from './components/ParamedicalCourses.js';
import AfterITIPage from './components/AfterITIPage.js';
import AfterDiplomaEngineeringPage from './components/AfterDiplomaEngineeringPage.js';
import AfterDegreePage from './components/AfterDegreePage.js';
import AfterBtechPage from './components/AfterBtechPage.js';
import AfterMtechPage from './components/AfterMtechPage.js';
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogin = (userInfo) => {
        setIsAuthenticated(true);
        setUser(userInfo);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <Router>
            {/* Render the Navbar only if the user is authenticated */}
            {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />}
            <Routes>
                {/* Show Home page by default */}
                <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Home />} />

                {/* Login and Register should redirect to Dashboard if authenticated */}
                <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
                <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register onRegister={handleLogin} />} />

                {/* Protected routes */}
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard user={user} /> : <Navigate to="/login" />} />
                <Route path="/my-account" element={isAuthenticated ? <MyAccount user={user} setUser={setUser} /> : <Navigate to="/login" />} />
                <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
                <Route path ="/After10thPage"element={isAuthenticated?<After10thPage/>:<Navigate to ="/login"/>}/>
                <Route path="/IntermediatePage" element={isAuthenticated ? <IntermediatePage /> : <Navigate to="/login" />} />
                <Route path="/BtechPage" element = {isAuthenticated ? <BTechPage/>:<Navigate to ="/login"/>}/>
                <Route path="/MTechPage" element = {isAuthenticated ? <MTechPage/>:<Navigate to = "/login"/>}/>
                <Route path="/DiplomaPage" element ={isAuthenticated ?<DiplomaPage/>:<Navigate to = "/login"/>}/>
                <Route path="/DegreePage" element = {isAuthenticated?<DegreePage/>:<Navigate to = "/login"/>}/>
                <Route path="/ITIPage" element = {isAuthenticated?<ITIPage/>:<Navigate to = "/login"/>}/>
                <Route path="/ParamedicalCourses" element = {isAuthenticated?<ParamedicalCourses/>:<Navigate to = "/login"/>}/>
                <Route path="/AfterIntermediateGroupPage" element ={isAuthenticated?<AfterIntermediateGroupPage/>:<Navigate to = "/login"/>}/>
                <Route path="/AfterITIPage" element ={isAuthenticated?<AfterITIPage/>:<Navigate to = "/login"/>}/>
                <Route path="/AfterDiplomaEngineeringPage" element = {isAuthenticated?<AfterDiplomaEngineeringPage/>:<Navigate to ="/login"/>}/>
                <Route path="/AfterDegreePage" element ={isAuthenticated?<AfterDegreePage/>:<Navigate to ="/login"/>}/>
                <Route path="/AfterMtechPage" element ={isAuthenticated?<AfterMtechPage/>:<Navigate to ="login"/>}/>
                <Route path="/AfterBtechPage" element ={isAuthenticated?<AfterBtechPage/>:<Navigate to ="/login"/>}/>
            </Routes>
        </Router>
    );
};

export default App;
