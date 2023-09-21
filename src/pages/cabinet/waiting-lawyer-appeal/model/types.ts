export interface InterestedLawyer {
    cost: number;
    deadline: null;
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