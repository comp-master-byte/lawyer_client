import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home/home';
import Appeals from 'pages/cabinet/appeals/appeals';
import PrivacyPolicy from 'pages/privacy-policy/privacy-policy';
import TermsOfUse from 'pages/terms-of-use/terms-of-use';
import EditProfile from 'pages/cabinet/edit-profile/edit-profile';
import WaitingLawyerAppeal from 'pages/cabinet/waiting-lawyer-appeal/waiting-lawyer-appeal';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import Cookies from 'js-cookie';
import LawyerProfile from 'pages/lawyer-cabinet/lawyer-profile/lawyer-profile';
import Market from 'pages/lawyer-cabinet/market/market';
import PageLayout from 'entities/layouts/page-layout/page-layout';
import LawyerAppeals from 'pages/lawyer-cabinet/lawyer-appeals/lawyer-appeals';
import ChatsApplications from 'pages/chat/chats-applications/chats-applications';
import ChatWithLawyer from 'pages/chat/chat-with-lawyer/chat-with-lawyer';
import WaitingResponseAppeal from 'pages/cabinet/waiting-response-appeal/waiting-response-appeal';

const AppRoutes: React.FC = () => {
    const {user} = useTypedSelector((state) => state.userSlice);

    return (
        <Routes>
            {/* Pulic Routes */}
            <Route path='/' element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path='/reset_password/:uid/:token' element={<Home />} /> 
                <Route path='privacy-policy' element={<PrivacyPolicy />} />
                <Route path='terms-of-use' element={<TermsOfUse />} />
            </Route>

            {/* Private Routes and Client */}
            {!user?.is_lawyer && Cookies.get("token") ?
                <Route path='/cabinet/' element={<PageLayout />}>
                    <Route path='appeals' element={<Appeals />} />
                    <Route path='appeals/candidates/:id' element={<WaitingLawyerAppeal />} />
                    <Route path='appeals/new/:appealId' element={<WaitingResponseAppeal />} />
                    <Route path='edit-profile' element={<EditProfile />} />
                </Route>
                : <></>
            }
            <Route path="/chats/" element={<PageLayout />}>
                <Route path="/chats/" element={<ChatsApplications />}>
                    <Route path=':id' element={<ChatWithLawyer />} />
                </Route>
            </Route>

            {/* Private Routes and Lawyer */}
                <Route path='/lawyer-cabinet/' element={<PageLayout />}>
                    <Route path='market' element={<Market />} />
                    <Route path='profile' element={<LawyerProfile />} />
                    <Route path='applications' element={<LawyerAppeals />} />
                </Route>

        </Routes>
    )
}

export default AppRoutes;