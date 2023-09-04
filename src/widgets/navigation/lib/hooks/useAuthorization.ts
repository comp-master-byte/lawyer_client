import { useCallback, useEffect, useState } from "react"
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { authorizationSlice } from "widgets/navigation/model/authorizationSlice";


export const useAuthorization = () => {
    const dispatch = useAppDispatch();

    const {toggleRegisterModalVisibility, toggleSignInModalVisibility} = authorizationSlice.actions;

    const {isRegisterModalVisible, isSignInModalVisible, isSuccessRegisterModalVisible} = useTypedSelector((state) => state.authorizationSlice);

    const [isForgetPasswordModalVisible, setIsForgetPasswordModalVisible] = useState(false);

    const openSignInModal = useCallback(() => {
        if(isRegisterModalVisible) {
            dispatch(toggleRegisterModalVisibility(false));
        }
        dispatch(toggleSignInModalVisibility(true));
    }, [isRegisterModalVisible])

    const openForgetPasswordModal = useCallback(() => {
        dispatch(toggleSignInModalVisibility(false));
        setIsForgetPasswordModalVisible(true);
    }, [])

    const openSignUpModal = useCallback(() => {
        dispatch(toggleSignInModalVisibility(false));
        dispatch(toggleRegisterModalVisibility(true));
    }, [])

    const closeSignInModal = useCallback(() => {
        dispatch(toggleSignInModalVisibility(false));
    }, [])

    const closeForgetPasswordModal = useCallback(() => {
        setIsForgetPasswordModalVisible(false);
    }, [])

    const backToSignInFromForget = useCallback(() => {
        setIsForgetPasswordModalVisible(false);
        dispatch(toggleSignInModalVisibility(true));
    }, [])

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