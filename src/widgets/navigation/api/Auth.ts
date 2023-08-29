import axios from "axios";
import { API_URL } from "shared/api/http";
import { SignInValues } from "../model/types";
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
}