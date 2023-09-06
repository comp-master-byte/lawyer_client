import { useState } from "react"


export const useSelect = () => {
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const toggleOptionsVisibility = function() {
        setIsOptionsVisible(prev => !prev);
    }

    const closeSelectOptions = function() {
        setIsOptionsVisible(false);
    }

    return {
        isOptionsVisible,
        closeSelectOptions,
        toggleOptionsVisibility
    }
}