import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home/home';
import Appeals from 'pages/cabinet/appeals/appeals';
import PageLayout from 'entities/page-layout/page-layout';
import PrivacyPolicy from 'pages/privacy-policy/privacy-policy';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<PageLayout />}>
                <Route path='privacy-policy' element={<PrivacyPolicy />} />
            </Route>
            <Route path='/cabinet/appeals' element={<Appeals />} />
        </Routes>
    )
}

export default AppRoutes;