import {HttpClientApi} from "../../core";
import {useMutation} from "@tanstack/react-query";

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}
export const EditPostService = (url: string) => {
    const { put } = new HttpClientApi();
    return useMutation({
        mutationFn: async (payload: string) => {
            return await put(url, payload, {headers: headers})
        },
    });
}