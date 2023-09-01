import axios from "axios";
import { API_URL } from "shared/api/http";
import { ForgetPassword, SignInValues, SignUpValues } from "../model/types";
import { toast } from "react-toastify";
import { signUpMapper } from "./mappers/signUpMapper";
import { UseFormSetError } from "react-hook-form";

export default class Auth {
    static async login(loginData: SignInValues, setError: UseFormSetError<SignInValues>) {
        try {
            const response = await axios.post(`${API_URL}/auth/token/login`, loginData)
            return response.data;
        } catch(error: any) {
            setError("email", {
                type: "server",
                message: error.response.data.non_field_errors
            })
        }
    }

    static async register(registerData: SignUpValues, setError: UseFormSetError<any>) {
        try {
            const mappedRegisterData = signUpMapper(registerData);
            const response = await axios.post(`${API_URL}/api/auth/users/`, mappedRegisterData);
            return response.data;
        } catch(error: any) {
            const err = error.response.data;
            for(let key in err) {
                toast(err[key][0], {type: "error"});
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
}