import * as z from "zod";
import { validNumber, validString } from "..";

export const ResultsForm = z.object({
    id: validNumber,
    result: validString,
});

export type ResultsType = z.infer<typeof ResultsForm>;
