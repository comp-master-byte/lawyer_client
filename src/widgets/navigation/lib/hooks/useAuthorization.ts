import { useCallback, useState } from "react"


export const useAuthorization = () => {
    const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
    const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

    const openSignInModal = useCallback(() => {
        if(isSignUpModalVisible) {
            setIsSignUpModalVisible(false);
        }
        setIsSignInModalVisible(true);
    }, [isSignUpModalVisible])

    const openSignUpModal = useCallback(() => {
        setIsSignInModalVisible(false);
        setIsSignUpModalVisible(true);
    }, [])

    const closeSignInModal = useCallback(() => {
        setIsSignInModalVisible(false);
    }, [])

    const closeSignUpModal = useCallback(() => {
        setIsSignUpModalVisible(false);
    }, [])

    return {
        isSignInModalVisible,
        openSignInModal,
        closeSignInModal,
        closeSignUpModal,
        openSignUpModal,
        isSignUpModalVisible
    }
}