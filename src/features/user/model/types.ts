export interface User {
    id: number;
    full_name: string;
    email: string;
    is_lawyer: boolean;
    about_lawyer: string|null;
    birthday: string;
    education: string|null;
    experience: string|null;
    photo: string|null;
    is_lawyer_confirmed: boolean;
}

export interface UserState {
    user: User|null;
}