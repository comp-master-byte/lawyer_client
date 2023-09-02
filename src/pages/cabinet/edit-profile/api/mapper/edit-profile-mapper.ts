import { EditProfileValues } from "../../model/types";

export const editProfileMapper = function(data: any) {
    const result: any = {};

    for(let key in data) {
        if(data[key] !== "") {
            result[key] = data[key]
        }
    }

    return result;
}