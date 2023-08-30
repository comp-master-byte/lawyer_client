import { Control } from "react-hook-form";
import { ISelectOption } from "shared/model/types";


export interface SelectProps {
    selectedOption?: ISelectOption|null;
    options: ISelectOption[];
    label?: string;
    onSelectOption: (option: ISelectOption) => void;
    defaultValue?: string;
    selectWrapperClassName?: string;
}

export interface ControllerSelectProps {
    options: ISelectOption[];
    label?: string;
    name: string;
    control: Control<any>;
    defaultValue?: string;
}