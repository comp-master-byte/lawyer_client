import { useCallback, useState } from "react";


export const useLawyerItem = () => {
    const [isLawyerResponseModalVisible, setIsLawyerResponseModalVisible] = useState(false);
    const [isSelectLawyerModalVisible, setIsSelectLawyerModalVisible] = useState(false);

    const closeLawyerResponseModal = useCallback(() => {
        setIsLawyerResponseModalVisible(false);
    }, [])

    const closeSelectLawyerModal = useCallback(() => {
        setIsSelectLawyerModalVisible(false);
    }, [])

    const openLawyerResponseModal = useCallback(() => {
        setIsLawyerResponseModalVisible(true);
    }, [])

    const openSelectLawyerModal = useCallback(() => {
        setIsSelectLawyerModalVisible(true);
    }, [])

    return {
        isLawyerResponseModalVisible,
        isSelectLawyerModalVisible,
        closeLawyerResponseModal,
        closeSelectLawyerModal,
        openLawyerResponseModal,
        openSelectLawyerModal,
    }
}