import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from './App';
import Menu from './Components/Menu';

export const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path=":console" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};
