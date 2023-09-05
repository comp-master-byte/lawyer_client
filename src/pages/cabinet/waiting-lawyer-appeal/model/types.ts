export interface InterestedLawyer {
    cost: number;
    deadline: null;
    lawyer: {
        id: number;
        full_name: string;
    }
}

export interface InterestedLawyersState {
    interestedLawyers: InterestedLawyer[];
}