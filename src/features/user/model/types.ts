

export interface UserState {
    user: {
        full_name: string;
        email: string;
        is_lawyer: boolean;
    }|null;
}