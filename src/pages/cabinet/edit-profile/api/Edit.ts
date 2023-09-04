import $api from "shared/api/http";
import { EditProfileValues, PasswordsValues } from "../model/types";
import { toast } from "react-toastify";
import { editProfileMapper } from "./mapper/edit-profile-mapper";
import { UseFormSetError } from "react-hook-form";

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

    static async setNewPassword(data: PasswordsValues, setError: UseFormSetError<any>) {
        try {
            const response = await $api.post('/api/auth/users/set_password/', data);
            toast("Пароль успешно изменен!", {type: "success"});
            return 200;
        } catch(error: any) {
            const err = error.response.data;
            for(let key in err) {
                setError(key, {
                    message: err[key],
                    type: "validate"
                })
            }
        }
    }
}