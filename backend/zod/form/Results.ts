import * as z from "zod";
import { validString } from "..";

export const ResultsForm = z.object({
    result: validString,
});

export type ResultsType = z.infer<typeof ResultsForm>;
