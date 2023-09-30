import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { authorizationSlice } from "widgets/navigation/model/authorizationSlice";


export const useAuthorization = () => {
    const dispatch = useAppDispatch();

    const {uid, token} = useParams();

    const {toggleRegisterModalVisibility, toggleSignInModalVisibility, setResetPasswordParams} = authorizationSlice.actions;

    const {isSignInModalVisible, isRegisterModalVisible, isSuccessRegisterModalVisible} = useTypedSelector((state) => state.authorizationSlice);

    const [isForgetPasswordModalVisible, setIsForgetPasswordModalVisible] = useState(false);

    const openSignInModal = useCallback(() => {
        dispatch(toggleSignInModalVisibility(true));
    }, [])

    const openSignInCloseSignUp = useCallback(() => {
        dispatch(toggleRegisterModalVisibility(false));
        dispatch(toggleSignInModalVisibility(true));
    }, [])

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

    useEffect(() => {
        if(uid||token) {
            dispatch(setResetPasswordParams({token, uid} as {token: string; uid: string}))
        }
    }, [])
    
    useEffect(() => {
        if(
            isSignInModalVisible||
            isRegisterModalVisible||
            isSuccessRegisterModalVisible||
            isForgetPasswordModalVisible
        ) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [
        isSignInModalVisible, 
        isRegisterModalVisible, 
        isSuccessRegisterModalVisible, 
        isForgetPasswordModalVisible
    ])

    return {
        isSignInModalVisible,
        openSignInModal,
        closeSignInModal,
        openSignUpModal,
        backToSignInFromForget,
        openForgetPasswordModal,
        closeForgetPasswordModal,
        isForgetPasswordModalVisible,
        openSignInCloseSignUp
    }
}