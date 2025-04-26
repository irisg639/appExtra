import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Productos from './pages/Productos';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import SignUp from './pages/SignUp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/productos" element={
                    <PrivateRoute>
                        <Productos />
                    </PrivateRoute>
                } />
            </Routes>
        </Router>
    );
}

export default App;
