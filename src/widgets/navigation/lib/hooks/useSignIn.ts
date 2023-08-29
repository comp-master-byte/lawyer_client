import { useCallback, useState } from "react"


export const useSignIn = () => {
    const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

    const openSignInModal = useCallback(() => {
        setIsSignInModalVisible(true);
        console.log("cl");
        
    }, [])

    const closeSignInModal = useCallback(() => {
        setIsSignInModalVisible(false);
    }, [])

    return {
        isSignInModalVisible,
        openSignInModal,
        closeSignInModal
    }
}