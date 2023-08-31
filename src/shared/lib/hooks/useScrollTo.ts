import { useLocation, useNavigate } from "react-router-dom";

export const useScrollTo = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const scrollToWindowElement = function(scrollTop: number) {
        window.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
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

    return {
        scrollToAboutUs,
        scrollToAdvantages,
        scrollToThemes,
        scrollToContacts
    }
}