interface InputProps {
    placeholder?: string;
    error?: any;
    label?: string;
    type?: "password"|"text";
    inputClassName?: string;
    variant?: 'primary'|'secondary';
    disabled?: boolean;
    labelClassName?: string;
}

export interface MyInputProps extends InputProps {
    register?: any;
    hasSearch?: boolean;
    hasFile?: boolean;
}

export interface MaskInputProps extends InputProps {
    mask: string;
    control: any;
    name: string;
    validation?: {
        required: 'Это поле обязательное!'
    }
}