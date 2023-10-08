export interface InterestedLawyer {
    cost: number;
    days: number;
    hours: number;
    note: string;
    lawyer: {
        id: number;
        full_name: string;
    }
}

export interface InterestedLawyersState {
    interestedLawyers: InterestedLawyer[];
    isLawyersLoading: boolean;
}