import { AppealAndApplication } from "@/shared/model/types";


export const literalNavigation = (appeal: AppealAndApplication) => {
    const obj: {[x:string]: string} = {
        'candidates': `/cabinet/appeals/candidates/${appeal.question_id}`,
        'active': `/chats/${appeal.question_id}`,
        'new': `/cabinet/appeals/new/${appeal.question_id}`
    }

    return obj[appeal.status]
}