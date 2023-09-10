import { useMemo } from "react";
import { useTypedSelector } from "./redux";

export const useVarification = () => {
    const {user} = useTypedSelector(state => state.userSlice);

    const isLawyerCompletedProfile = useMemo(() => {
        if(user?.is_lawyer && user?.about_lawyer && user?.education && user?.experience) {
            return true;
        }

        if(!user?.is_lawyer) {
            return true;
        }

        return false;
    }, [user])

    return {isLawyerCompletedProfile}
}