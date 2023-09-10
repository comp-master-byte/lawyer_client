export interface UserState {
    user: {
        full_name: string;
        email: string;
        is_lawyer: boolean;
        about_lawyer: string|null;
        birthday: string;
        education: string|null;
        experience: string|null;
        photo: string|null;
    }|null;
}