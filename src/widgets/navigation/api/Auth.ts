import axios from "axios";
import { API_URL } from "shared/api/http";
import { ForgetPassword, ResetPasswordConfirm, SignInValues, SignUpValues } from "../model/types";
import { toast } from "react-toastify";
import { signUpMapper } from "./mappers/signUpMapper";
import { UseFormSetError } from "react-hook-form";

interface Register extends SignUpValues {
    chain: number[]
}

export default class Auth {
    static async login(loginData: SignInValues, setError: UseFormSetError<SignInValues>) {
        try {
            const responseToken = await axios.post(`${API_URL}/auth/token/login`, loginData);
            const responseUser = await axios.get(`${API_URL}/api/auth/users/me/`, {headers: {"Authorization": `Token ${responseToken.data.auth_token}`}});
            const toStringUser = JSON.stringify(responseUser.data);
            localStorage.setItem('user', toStringUser);
            return {auth_token: responseToken.data.auth_token, user: responseUser.data};
        } catch(error: any) {
            setError("email", {
                type: "server",
                message: error.response.data.non_field_errors
            })
        }
    }

    static async register(registerData: Register, setError: UseFormSetError<any>) {
        try {
            const mappedRegisterData = signUpMapper(registerData);
            const response = await axios.post(`${API_URL}/api/auth/users/`, mappedRegisterData);
            return response.data;
        } catch(error: any) {
            const err = error.response.data;
            for(let key in err) {
                setError(key, {
                    type: "validate",
                    message: err[key]
                })
            }
        }
    }

    static async resetPassword(resetData: ForgetPassword) {
        try {
            const response = await axios.post(`${API_URL}/api/auth/users/reset_password/`, resetData);
            return response;
        } catch(error: any) {
            for(let err of error.response.data.non_field_errors) {
                toast(err, {type: "error"})
            }
        }
    }

    static async resetPasswordConfirm(resetData: ResetPasswordConfirm) {
        try {
            const response = await axios.post(`${API_URL}/api/auth/users/reset_password_confirm/`, resetData);
            return 200;
        } catch(err) {}
    }
}