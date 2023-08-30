import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from 'pages/home/home';
import Appeals from 'pages/cabinet/appeals/appeals';
import Cookies from 'js-cookie';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {Cookies.get('token') 
                ? <Route path='/cabinet/appeals' element={<Appeals />} />
                : <Route path='*' element={<Navigate to='/' replace />} />
            }
        </Routes>
    )
}

export default AppRoutes;