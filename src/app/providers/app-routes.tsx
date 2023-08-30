import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home/home';
import Appeals from 'pages/cabinet/appeals/appeals';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cabinet/appeals' element={<Appeals />} />
        </Routes>
    )
}

export default AppRoutes;