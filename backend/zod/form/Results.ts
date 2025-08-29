import * as z from "zod";
import { email, validNumber, validString } from "..";

export const Results = z.object({
    id: validNumber,
    result: validString,
});
