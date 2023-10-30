import {HttpClientApi} from "../../core";
import { useQuery } from '@tanstack/react-query';

export const GetUserService = (url: string) : any => {
    const { get } = new HttpClientApi();
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            return await get(url, {})
        },
    });
}