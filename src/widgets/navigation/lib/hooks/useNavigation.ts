import { useCallback, useEffect, useState } from "react";
import { useClickOutside } from "shared/lib/hooks/useClickOutside";

export const useNavigation = () => {
    const [isNavigationMobileVisible, setIsNavigationMobileVisible] = useState(false);
    const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);

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
        isNavigationMobileVisible,
        openMobileMavigation,
        closeMobileNavigation,
        isProfilePopupVisible,
        toggleProfilePopupVisibility
    };
};