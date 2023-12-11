import { ISelectOption } from "@/shared/model/types";


export const LAWYER_APPEALS: ISelectOption[] = [
    {id: 1, value: "Все обращения", label: ""},
    {id: 2, value: "В работе", label: 'active'},
    {id: 3, value: "Отказ", label: 'deny'},
    {id: 4, value: "Завершено", label: 'complete'},
    {id: 5, value: "Идет выбор юриста", label: 'candidates'},
]