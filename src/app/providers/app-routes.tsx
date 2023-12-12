import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home/home';
import { useTypedSelector } from '@/shared/lib/hooks/redux';
import Cookies from 'js-cookie';
import PageLayout from '@/entities/layouts/page-layout/page-layout';
import ChatWithLawyer from '@/pages/chat/chat-with-lawyer/chat-with-lawyer';
import { MarketLazy } from '@/pages/lawyer-cabinet/market/market.lazy';
import { TermsOfUseLazy } from '@/pages/terms-of-use/terms-of-use.lazy';
import { PrivacyPolicyLazy } from '@/pages/privacy-policy/privacy-policy.lazy';
import { LawyerProfileLazy } from '@/pages/lawyer-cabinet/lawyer-profile/lawyer-profile.lazy';
import { LawyerAppealsLazy } from '@/pages/lawyer-cabinet/lawyer-appeals/lawyer-appeals.lazy';
import { WaitingResponseAppealLazy } from '@/pages/cabinet/waiting-response-appeal/waiting-response-appeal.lazy';
import { WaitingLawyerAppealLazy } from '@/pages/cabinet/waiting-lawyer-appeal/waiting-lawyer-appeal.lazy';
import { EditProfileLazy } from '@/pages/cabinet/edit-profile/edit-profile.lazy';
import { AppealsLazy } from '@/pages/cabinet/appeals/appeals.lazy';
import { ChatsApplicationsLazy } from '@/pages/chat/chats-applications/chats-applications.lazy';

const AppRoutes: React.FC = () => {
    const {user} = useTypedSelector((state) => state.userSlice);

    return (
        <Routes>
            <Route path='/' element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path='/reset_password/:uid/:token' element={<Home />} /> 
                <Route path='privacy-policy' element={<Suspense fallback={'Загрузка...'}><PrivacyPolicyLazy /></Suspense>} />
                <Route path='terms-of-use' element={<Suspense fallback={'Загрузка...'}><TermsOfUseLazy /></Suspense>} />
            </Route>

            {/* Private Routes and Client */}
            {!user?.is_lawyer && Cookies.get("token") ?
                <Route path='/cabinet/' element={<PageLayout />}>
                    <Route path='appeals' element={<Suspense fallback={'Загрузка...'}><AppealsLazy /></Suspense>} />
                    <Route path='appeals/candidates/:id' element={<Suspense fallback={'Загрузка...'}><WaitingLawyerAppealLazy /></Suspense>} />
                    <Route path='appeals/new/:appealId' element={<Suspense fallback={'Загрузка...'}><WaitingResponseAppealLazy /></Suspense>} />
                    <Route path='edit-profile' element={<Suspense fallback={'Загрузка...'}><EditProfileLazy /></Suspense>} />
                </Route>
                : <></>
            }
            <Route path="/chats/" element={<PageLayout />}>
                <Route path="/chats/" element={<Suspense fallback={'Загрузка...'}><ChatsApplicationsLazy /></Suspense>}>
                    <Route path=':id' element={<ChatWithLawyer />} />
                </Route>
            </Route>

            {/* Private Routes and Lawyer */}
            <Route path='/lawyer-cabinet/' element={<PageLayout />}>
                <Route path='market' element={<Suspense fallback={'Загрузка...'}><MarketLazy /></Suspense>} />
                <Route path='profile' element={<Suspense fallback={'Загрузка...'}><LawyerProfileLazy /></Suspense>} />
                <Route path='applications' element={<Suspense fallback={'Загрузка...'}><LawyerAppealsLazy /></Suspense>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;