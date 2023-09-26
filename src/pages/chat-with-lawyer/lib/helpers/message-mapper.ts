import { User } from "features/user/model/types";

export const messageMapper = (data: any, user: User) => ({
    text: data.text,
    sender: {
        id: user?.id as number,
        full_name: user?.full_name as string
    }
})