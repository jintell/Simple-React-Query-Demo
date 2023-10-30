import { HttpClientApi } from "../../core";
import {useMutation} from "@tanstack/react-query";

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}
export const CreatePostService = (url : string)  => {
    const { post } = new HttpClientApi();
    return useMutation({
        mutationFn: async (payload: string) => {
            return await post(url, payload, {headers: headers})
        },
    });
}