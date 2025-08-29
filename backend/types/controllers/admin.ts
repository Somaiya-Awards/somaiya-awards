export type countAll = {
    institutionFormCount: number;
    researchFormCount: number;
    sportsFormCount: number;
    teachingFormCount: number;
    nonTeachingFormCount: number;
    feedbackOneFormCount: number;
    feedbackTwoFormCount: number;
    feedbackThreeFormCount: number;
    feedbackFourFormCount: number;
    studentsFormCount: number;
};

export type lastDate = {
    date: string;
    formsFilled: number;
};

export type TeachingJuryScore = {
    id: number;
    faculty_name: string;
    institution_name: string;
    designation: string;
    groups: number[];
    applicationScore: number;
    feedbackScore: number;
    ieacApprovedFile: string | null;
    totalScore: number;
};

export type NonTeachingJuryScore = {
    id: number;
    staff_name: string;
    institution_name: string;
    designation: string;
    groups: number[];
    applicationScore: number;
    feedbackScore: number;
    ieacApprovedFile: string | null;
    totalScore: number;
};

export type InstituteCount = {
    institution_name: string;
    formsFilled: number;
};

export type groupCountType = {
    group: "A" | "B" | "C" | "D" | "E";
    formsFilled: number;
};
