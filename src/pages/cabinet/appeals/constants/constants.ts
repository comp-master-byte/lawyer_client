import { ISelectOption } from "@/shared/model/types";

export const APPEALS: ISelectOption[] = [
    {id: 1, value: 'Все обращения', label: ''},
    {id: 2, value: 'Ожидает выбора юриста', label: 'candidates'},
    {id: 3, value: 'Ожидает откликов от юристов', label: 'new'},
    {id: 4, value: 'Идет диалог с юристом', label: 'active'},
    {id: 5, value: 'Черновик', label: 'draft'},
    {id: 6, value: 'Завершено', label: 'complete'},
]