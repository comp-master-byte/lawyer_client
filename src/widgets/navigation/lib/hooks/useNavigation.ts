import { useCallback, useEffect, useMemo, useState } from "react";
import { useTypedSelector } from "shared/lib/hooks/redux";
import { useClickOutside } from "shared/lib/hooks/useClickOutside";
import { ProfileLink } from "widgets/navigation/model/types";

export const useNavigation = () => {
    const {user} = useTypedSelector((state) => state.userSlice);

    const [isNavigationMobileVisible, setIsNavigationMobileVisible] = useState(false);
    const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);


    const memoizedProfileLinks: ProfileLink[] = useMemo(() => {
        if(user?.is_lawyer) {
            return [
                {to: '/lawyer-cabinet/market', name: 'Маркет заявок'},
                {to: '/lawyer-cabinet/applications', name: 'Мои заявки'},
                {to: "/lawyer-cabinet/profile", name: 'Профиль'}
            ]
        } else {
            return [
              {to: '/cabinet/appeals', name: 'Мои обращения'},
              {to: '/cabinet/chats', name: 'Чаты'},
              {to: '/cabinet/edit-profile', name: 'Редактировать профиль'},
            ]
        }
    }, [user])

    const openMobileMavigation = () => setIsNavigationMobileVisible(true);
    const closeMobileNavigation = () => setIsNavigationMobileVisible(false);

    const toggleProfilePopupVisibility = () => setIsProfilePopupVisible(prev => !prev);

    const closeProfilePopup = useCallback(() => {
        setIsProfilePopupVisible(false);
    }, [])

    const profilePopupRef = useClickOutside(() => {
        setIsProfilePopupVisible(false);
    })

    useEffect(() => {
        if(isNavigationMobileVisible) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isNavigationMobileVisible])

    return {
        profilePopupRef,
        closeProfilePopup,
        memoizedProfileLinks,
        isNavigationMobileVisible,
        openMobileMavigation,
        closeMobileNavigation,
        isProfilePopupVisible,
        toggleProfilePopupVisibility
    };
};