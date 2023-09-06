import { ISelectOption } from "shared/model/types";

export const APPEALS: ISelectOption[] = [
    {id: 1, value: 'Все обращения', label: ''},
    {id: 2, value: 'Ожидает выбора юриста', label: 'new'},
    {id: 3, value: 'Идет диалог с юристом', label: 'active'},
    {id: 4, value: 'Черновик', label: ''},
    {id: 5, value: 'Завершено', label: 'complete'},
]