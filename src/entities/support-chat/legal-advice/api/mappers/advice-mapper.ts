import { LegalFormValues } from "../../hooks/useLegalAdviceForm";


export const adviceMapper = function(data: LegalFormValues) {
    return {
        ...data,
        topic: data.topic.value
    }
}