import $api from "shared/api/http";
import { EditProfileValues } from "../model/types";
import { toast } from "react-toastify";
import { editProfileMapper } from "./mapper/edit-profile-mapper";


export default class Edit {
    static async editProfile(data: Partial<EditProfileValues>) {
        try {
            const mappedData = editProfileMapper(data);
            const response = await $api.patch('/api/auth/users/me/', mappedData);
            const toStringUpdatedUser = JSON.stringify(response.data);
            localStorage.setItem('user', toStringUpdatedUser)
            toast("Ваши данные успешно изменены!", {type: "success"});
            return response.data;
        } catch(error: any) {
            // error
        }
    }
}