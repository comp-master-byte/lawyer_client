import { useCallback, useEffect, useState } from "react"


export const useAuthorization = () => {
    const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
    const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
    const [isForgetPasswordModalVisible, setIsForgetPasswordModalVisible] = useState(false);

    const openSignInModal = useCallback(() => {
        if(isSignUpModalVisible) {
            setIsSignUpModalVisible(false);
        }
        setIsSignInModalVisible(true);
    }, [isSignUpModalVisible])

    const openForgetPasswordModal = useCallback(() => {
        setIsSignInModalVisible(false);
        setIsForgetPasswordModalVisible(true);
    }, [])

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

    const closeForgetPasswordModal = useCallback(() => {
        setIsForgetPasswordModalVisible(false);
    }, [])

    useEffect(() => {
        if(isSignInModalVisible||isSignUpModalVisible||isForgetPasswordModalVisible) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isSignInModalVisible, isSignUpModalVisible, isForgetPasswordModalVisible])

    return {
        isSignInModalVisible,
        openSignInModal,
        closeSignInModal,
        closeSignUpModal,
        openSignUpModal,
        isSignUpModalVisible,
        openForgetPasswordModal,
        closeForgetPasswordModal,
        isForgetPasswordModalVisible
    }
}