import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/home/home';
import Appeals from 'pages/cabinet/appeals/appeals';
import PageLayout from 'entities/page-layout/page-layout';
import PrivacyPolicy from 'pages/privacy-policy/privacy-policy';
import TermsOfUse from 'pages/terms-of-use/terms-of-use';
import EditProfile from 'pages/cabinet/edit-profile/edit-profile';
import WaitingLawyerAppeal from 'pages/cabinet/waiting-lawyer-appeal/waiting-lawyer-appeal';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import Cookies from 'js-cookie';
import LawyerProfile from 'pages/lawyer-cabinet/lawyer-profile/lawyer-profile';
import ChatsApplications from 'entities/chats-applications/chats-applications';
import ChatWithLawyer from 'pages/cabinet/chat-with-lawyer/chat-with-lawyer';
import Applications from 'pages/lawyer-cabinet/applications/applications';
import Market from 'pages/lawyer-cabinet/market/market';

const AppRoutes: React.FC = () => {
    const {user} = useTypedSelector((state) => state.userSlice);

    return (
        <Routes>
            {/* Pulic Routes */}
            <Route path='/' element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path='privacy-policy' element={<PrivacyPolicy />} />
                <Route path='terms-of-use' element={<TermsOfUse />} />
            </Route>

            {/* Private Routes and Client */}
            {!user?.is_lawyer && Cookies.get("token") ?
                <Route path='/cabinet/' element={<PageLayout />}>
                    <Route path='appeals' element={<Appeals />} />
                    <Route path='appeals/:id' element={<WaitingLawyerAppeal />} />
                    <Route path='edit-profile' element={<EditProfile />} />
                    <Route path='chats/' element={<ChatsApplications />}>
                        <Route path=':id' element={<ChatWithLawyer />} />
                    </Route>
                </Route>
                : <Route path='*' element={<Navigate to='/' replace />} />
            }

            {/* Private Routes and Lawyer */}
            {user?.is_lawyer && Cookies.get("token") ?
                <Route path='/lawyer-cabinet/' element={<PageLayout />}>
                    <Route path='market' element={<Market />} />
                    <Route path='profile' element={<LawyerProfile />} />
                    <Route path='applications' element={<Applications />} />
                </Route>
                : <Route path='*' element={<Navigate to='/' replace />} />
            }

        </Routes>
    )
}

export default AppRoutes;