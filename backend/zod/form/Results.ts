import * as z from "zod";
import { email, validNumber, validString } from "..";

export const ResultsForm = z.object({
    id: validNumber,
    result: validString,
});
