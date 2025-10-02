import * as z from "zod";
import { validNumber } from "../../../../backend/zod";

export const CountAll = z.object({
    institutionFormCount: validNumber,
    researchFormCount: validNumber,
    sportsFormCount: validNumber,
    teachingFormCount: validNumber,
    nonTeachingFormCount: validNumber,
    feedbackOneFormCount: validNumber,
    feedbackTwoFormCount: validNumber,
    feedbackThreeFormCount: validNumber,
    feedbackFourFormCount: validNumber,
    studentsFormCount: validNumber,
});

export type CountAllType = z.infer<typeof CountAll>;
