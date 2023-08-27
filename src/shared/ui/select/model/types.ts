

export interface SelectProps {
    options: {
        id: number; value: string
    }[];
    selectedOption?: {id: number; value: string}
}