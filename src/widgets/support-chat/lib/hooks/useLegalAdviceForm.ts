import { SubmitHandler, useForm } from "react-hook-form"

interface FormValues {
    name: string;
    email: string;
    question: string;
}

export const useLegalAdviceForm = () => {
    const {register, control, formState: {errors}, handleSubmit} = useForm<FormValues>({mode: "all"});

    const onSubmitAdviceForm: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return {
        register,
        control,
        errors,
        handleSubmit,
        onSubmitAdviceForm
    }
}