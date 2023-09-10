export interface MyInputProps {
    placeholder?: string;
    error?: any;
    register: any;
    label?: string;
    type?: "password"|"text";
    inputClassName?: string;
    hasSearch?: boolean;
    hasFile?: boolean;
    variant?: 'primary'|'secondary';
    disabled?: boolean;
    labelClassName?: string;
}