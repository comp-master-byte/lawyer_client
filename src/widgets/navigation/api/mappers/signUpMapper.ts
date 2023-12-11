import { SignUpValues } from "@/widgets/navigation/model/types";

export const signUpMapper = (data: SignUpValues) => {
    return {
        ...data,
        username: 'user',
        is_lawyer: data.is_lawyer.value.includes("Я юрист") ? true : false
    }
}