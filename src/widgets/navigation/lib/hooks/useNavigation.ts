import { useEffect, useState } from "react";

export const useNavigation = () => {
    const [isNavigationMobileVisible, setIsNavigationMobileVisible] = useState<boolean>(false);

    const openMobileMavigation = () => setIsNavigationMobileVisible(true);
    const closeMobileNavigation = () => setIsNavigationMobileVisible(false);

    useEffect(() => {
        if(isNavigationMobileVisible) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isNavigationMobileVisible])

    return {
        isNavigationMobileVisible,
        openMobileMavigation,
        closeMobileNavigation
    };
};