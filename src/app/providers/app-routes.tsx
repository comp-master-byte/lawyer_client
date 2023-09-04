import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home/home';
import Appeals from 'pages/cabinet/appeals/appeals';
import PageLayout from 'entities/page-layout/page-layout';
import PrivacyPolicy from 'pages/privacy-policy/privacy-policy';
import TermsOfUse from 'pages/terms-of-use/terms-of-use';
import EditProfile from 'pages/cabinet/edit-profile/edit-profile';
import WaitingLawyerAppeal from 'pages/cabinet/waiting-lawyer-appeal/waiting-lawyer-appeal';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Pulic Routes */}
            <Route path='/' element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path='privacy-policy' element={<PrivacyPolicy />} />
                <Route path='terms-of-use' element={<TermsOfUse />} />
            </Route>

            {/* Private Routes */}
            <Route path='/cabinet/' element={<PageLayout />}>
                <Route path='appeals' element={<Appeals />} />
                <Route path='appeals/:id' element={<WaitingLawyerAppeal />} />
                <Route path='edit-profile' element={<EditProfile />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;