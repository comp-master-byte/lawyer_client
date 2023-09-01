import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch } from "shared/lib/hooks/redux";
import { authorizationSlice } from "widgets/navigation/model/authorizationSlice";
import { supportChatSlice } from "widgets/support-chat/model/supportChatSlice";
import AdviceForm from "../api/AdviceForm";
import { toast } from "react-toastify";

export interface LegalFormValues {
    question_text: string;
    topic: {
        id: 1,
        value: string
    };
}

export const useLegalAdviceForm = () => {
    const dispatch = useAppDispatch();
    const {register, control, formState: {errors}, handleSubmit, reset} = useForm<LegalFormValues>({mode: "all"});

    const {toggleLegalAdviceModalVisibility} = supportChatSlice.actions;
    const {toggleRegisterModalVisibility} = authorizationSlice.actions;


    const onSubmitAdviceForm: SubmitHandler<LegalFormValues> = async (data) => {
        const token = Cookies.get("token");
        if(token) {
            const response = await AdviceForm.createQuestion(data);
            if(response) {
                reset({question_text: "", topic: {}});
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
        onSubmitAdviceForm
    }
}