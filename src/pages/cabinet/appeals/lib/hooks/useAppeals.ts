import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { ISelectOption } from "shared/model/types";
import { fetchAppeals } from "../../model/async-actions";
import { appealsSlice } from "../../model/appealsSlice";

export const useAppeals = () => {
    const dispatch = useAppDispatch();

    const {isFetching, currentPage, appeals, maxCount} = useTypedSelector(state => state.appealsSlice);

    const [selectedAppealOption, setSelectedAppealOption] = useState<ISelectOption|null>(null);

    const onSelectAppealOption = useCallback((option: ISelectOption) => {
        setSelectedAppealOption(option);
    }, [])

    const scrollHandler = function(e: any) {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && appeals.length < maxCount) {
            dispatch(appealsSlice.actions.setFetchingStatus(true));
        }
    }

    useEffect(() => {
        if(isFetching) {
            dispatch(fetchAppeals(currentPage));
        }
    }, [isFetching, currentPage])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function() {
            document.removeEventListener("scroll", scrollHandler);
        }
    }, [appeals, maxCount])

    return {selectedAppealOption, onSelectAppealOption}
}