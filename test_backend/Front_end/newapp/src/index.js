import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Users from './Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Users" element={<Users />} />
        </Routes>
    </BrowserRouter>
);
