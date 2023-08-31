import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const [isNavigationMobileVisible, setIsNavigationMobileVisible] = useState<boolean>(false);

    const openMobileMavigation = () => setIsNavigationMobileVisible(true);
    const closeMobileNavigation = () => setIsNavigationMobileVisible(false);

    const scrollToWindowElement = function(scrollTop: number) {
        window.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
        closeMobileNavigation();
    }

    const syncCodeCompiler = function(scrollTop: number) {
        return new Promise((resolve, reject) => {
            if(pathname !== "/") {
                resolve("on profile");
            } else {  
                reject("on main page");
            }
        }).then(() => navigate('/'))
          .then(() => scrollToWindowElement(scrollTop))
          .catch(() => scrollToWindowElement(scrollTop))
    }

    const scrollToAboutUs = () => syncCodeCompiler(993);

    const scrollToAdvantages = () => syncCodeCompiler(2604);

    const scrollToThemes = () => syncCodeCompiler(3700);

    const scrollToContacts = () => syncCodeCompiler(4737);

    useEffect(() => {
        if(isNavigationMobileVisible) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isNavigationMobileVisible])

  return {
    scrollToAboutUs,
    scrollToAdvantages,
    scrollToThemes,
    scrollToContacts,
    isNavigationMobileVisible,
    openMobileMavigation,
    closeMobileNavigation
  };
};
