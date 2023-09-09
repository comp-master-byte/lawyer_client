import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch } from "shared/lib/hooks/redux";
import { authorizationSlice } from "widgets/navigation/model/authorizationSlice";
import { supportChatSlice } from "widgets/support-chat/model/supportChatSlice";
import AdviceForm from "../api/AdviceForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export interface LegalFormValues {
    question_text: string;
    topic: {
        id: 1,
        value: string
    };
}

export const useLegalAdviceForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {register, control, formState: {errors}, handleSubmit, reset} = useForm<LegalFormValues>({mode: "all"});

    const [isChecked, setIsChecked] = useState(false);
    const [triggerCheckedError, setIsTriggerCheckedError] = useState(false);

    const {toggleLegalAdviceModalVisibility} = supportChatSlice.actions;
    const {toggleRegisterModalVisibility} = authorizationSlice.actions;
    
    const onChecked = function(e: React.ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked
        setIsChecked(checked);

        if(checked) {
            setIsTriggerCheckedError(false);
        }
    }
    
    const onSubmitAdviceForm: SubmitHandler<LegalFormValues> = async (data) => {
        const token = Cookies.get("token");
        if(!isChecked) {
            setIsTriggerCheckedError(true);
            return;
        }
        
        if(token) {
            const response = await AdviceForm.createQuestion(data);
            if(response) {
                reset({question_text: "", topic: {}});
                navigate('/cabinet/appeals');
            }
        } else {
            toast("Чтобы задать вопрос нужно зарегистрироваться", {type: "info"})
            dispatch(toggleLegalAdviceModalVisibility(false));
            dispatch(toggleRegisterModalVisibility(true));
        }
    }

    return {
        register,
        control,
        errors,
        handleSubmit,
        isChecked,
        onChecked,
        onSubmitAdviceForm,
        triggerCheckedError,
    }
}