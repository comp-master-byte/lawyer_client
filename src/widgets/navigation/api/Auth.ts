import axios from "axios";
import { API_URL } from "shared/api/http";
import { SignInValues, SignUpValues } from "../model/types";
import { toast } from "react-toastify";


export default class Auth {
    static async login(loginData: SignInValues) {
        try {
            const response = await axios.post(`${API_URL}/auth/token/login`, loginData)
            return response;
        } catch(error: any) {
            for(let err of error.response.data.non_field_errors) {
                toast(err, {type: "error"})
            }
        }
    }

    static async register(registerData: SignUpValues) {
        try {
            const response = await axios.post(`${API_URL}/auth/token/users/`, registerData);
            return response;
        } catch(error: any) {
            for(let err of error.response.data.non_field_errors) {
                toast(err, {type: "error"})
            }
        }
    }
}