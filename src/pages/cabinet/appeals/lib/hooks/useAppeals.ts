import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { ISelectOption } from "shared/model/types";
import { fetchAppeals } from "../../model/async-actions";
import { appealsSlice } from "../../model/appealsSlice";
import { StatusQuery } from "../../model/types";

export const useAppeals = () => {
    const dispatch = useAppDispatch();

    const {setFetchingStatus, nullAppealsCurrentPage} = appealsSlice.actions;

    const {isFetching, offset, appeals, maxCount} = useTypedSelector(state => state.appealsSlice);

    const [selectedAppealOption, setSelectedAppealOption] = useState<ISelectOption|null>(null);

    const onSelectAppealOption = useCallback((option: ISelectOption) => {
        setSelectedAppealOption(option);
        dispatch(nullAppealsCurrentPage());
        dispatch(setFetchingStatus(true));
    }, [])

    const scrollHandler = function(e: any) {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && appeals.length < maxCount) {
            dispatch(setFetchingStatus(true));
        }
    }

    useEffect(() => {
        if(isFetching) {
            dispatch(fetchAppeals(offset, selectedAppealOption?.label as StatusQuery));
        }
    }, [isFetching, offset, selectedAppealOption])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function() {
            document.removeEventListener("scroll", scrollHandler);
        }
    }, [appeals, maxCount])

    return {selectedAppealOption, onSelectAppealOption}
}