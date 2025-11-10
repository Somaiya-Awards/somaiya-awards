import { isAxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import * as z from "zod";
import { Config, getAxiosMethod, RequestMethod } from "@/hooks";

async function process(config: Config, url: string, method: RequestMethod) {
    try {
        const data = await config.validator.parseAsync(config.data);
        const response = await getAxiosMethod(method)(url, data);
        return await config.response.parseAsync(response.data);
    } catch (Error) {
        if (Error instanceof z.ZodError) {
            throw Error;
        } else if (isAxiosError(Error)) {
            try {
                const { error } = await config.response.parseAsync(
                    Error.response?.data
                );

                if (Error.response?.status !== 500) {
                    return { type: "failure", error };
                } else {
                    return { type: "server-error" };
                }
            } catch (err) {
                console.warn(err);
                return { type: "server-error" };
            }
        } else {
            return { type: "server-error" };
        }
    }
}

export function useLogin(url: string, method: RequestMethod) {
    const { mutate, isPending, isError, isSuccess, error } = useMutation({
        mutationFn: (config: Config) => process(config, url, method),
    });

    return { mutate, isPending, isError, isSuccess, error };
}
