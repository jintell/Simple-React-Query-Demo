import {HttpClientApi} from "../../core";
import {useMutation} from "@tanstack/react-query";
export const DeletePostService = (url :string) => {
    const { remove } = new HttpClientApi();
    return useMutation({
        mutationFn: async () => {
            return await remove(url, {})
        },
    });
}