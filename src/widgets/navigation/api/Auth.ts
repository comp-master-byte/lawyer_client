import axios from "axios";
import { API_URL } from "shared/api/http";
import { ForgetPassword, SignInValues, SignUpValues } from "../model/types";
import { toast } from "react-toastify";
import { signUpMapper } from "./mappers/signUpMapper";


export default class Auth {
    static async login(loginData: SignInValues) {
        try {
            const response = await axios.post(`${API_URL}/auth/token/login`, loginData)
            return response.data;
        } catch(error: any) {
            for(let err of error.response.data.non_field_errors) {
                toast(err, {type: "error"})
            }
        }
    }

    static async register(registerData: SignUpValues) {
        try {
            const mappedRegisterData = signUpMapper(registerData);
            const response = await axios.post(`${API_URL}/api/auth/users/`, mappedRegisterData);
            return response.data;
        } catch(error: any) {
            for(let err of error.response.data.non_field_errors) {
                toast(err, {type: "error"})
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