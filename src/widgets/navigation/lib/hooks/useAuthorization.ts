import { useCallback, useEffect, useState } from "react"
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { authorizationSlice } from "widgets/navigation/model/authorizationSlice";


export const useAuthorization = () => {
    const dispatch = useAppDispatch();

    const {toggleRegisterModalVisibility} = authorizationSlice.actions;

    const {isRegisterModalVisible} = useTypedSelector((state) => state.authorizationSlice);

    const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
    const [isForgetPasswordModalVisible, setIsForgetPasswordModalVisible] = useState(false);

    const openSignInModal = useCallback(() => {
        if(isRegisterModalVisible) {
            dispatch(toggleRegisterModalVisibility(false));
        }
        setIsSignInModalVisible(true);
    }, [isRegisterModalVisible])

    const openForgetPasswordModal = useCallback(() => {
        setIsSignInModalVisible(false);
        setIsForgetPasswordModalVisible(true);
    }, [])

    const openSignUpModal = useCallback(() => {
        setIsSignInModalVisible(false);
        dispatch(toggleRegisterModalVisibility(true));
    }, [])

    const closeSignInModal = useCallback(() => {
        setIsSignInModalVisible(false);
    }, [])

    const closeForgetPasswordModal = useCallback(() => {
        setIsForgetPasswordModalVisible(false);
    }, [])

    const backToSignInFromForget = useCallback(() => {
        setIsForgetPasswordModalVisible(false);
        setIsSignInModalVisible(true);
    }, [])

    useEffect(() => {
        if(isSignInModalVisible||isRegisterModalVisible||isForgetPasswordModalVisible) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isSignInModalVisible, isRegisterModalVisible, isForgetPasswordModalVisible])

    return {
        isSignInModalVisible,
        openSignInModal,
        closeSignInModal,
        openSignUpModal,
        backToSignInFromForget,
        openForgetPasswordModal,
        closeForgetPasswordModal,
        isForgetPasswordModalVisible
    }
}