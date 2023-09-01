import { ISelectOption } from "shared/model/types";

export interface SignInValues {
    email: string;
    password: string;
}

export interface SignUpValues {
    full_name: string;
    is_lawyer: ISelectOption;
    email: string;
    password: string;
}

export interface ForgetPassword {
    email: string;
}

export interface AuthorizationState {
    isSignInModalVisible: boolean;
    isRegisterModalVisible: boolean;
    isSuccessRegisterModalVisible: boolean;
}