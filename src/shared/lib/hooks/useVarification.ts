import { useMemo } from "react";
import { useTypedSelector } from "./redux";

export type VerificationStatus = 'active'|'wait_varification'|'complete_profile'

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

    const isLawyerDocumentsVerified = useMemo(() => {
        if(user?.is_lawyer_confirmed && user?.is_lawyer) {
            return true;
        }

        return false;
    }, [user])

    const varificationStatus: VerificationStatus = useMemo(() => {
        if(isLawyerCompletedProfile && isLawyerDocumentsVerified) {
            return 'active';
        }
        if(isLawyerCompletedProfile && !isLawyerDocumentsVerified) {
            return 'wait_varification';
        }
        
        return 'complete_profile';
    }, [isLawyerCompletedProfile, isLawyerDocumentsVerified])

    return varificationStatus;
}