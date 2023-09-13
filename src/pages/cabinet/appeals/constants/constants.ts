import { ISelectOption } from "shared/model/types";

export const APPEALS: ISelectOption[] = [
    {id: 1, value: 'Все обращения', label: ''},
    {id: 2, value: 'Ожидает выбора юриста', label: 'candidates'},
    {id: 3, value: 'Идет диалог с юристом', label: 'active'},
    {id: 4, value: 'Черновик', label: 'draft'},
    {id: 5, value: 'Завершено', label: 'complete'},
    {id: 6, value: 'Ожидает откликов от юристов', label: 'new'}
]