import { useQuery } from '@tanstack/react-query';
import { HttpClientApi } from "../../core";

export const GetPostService = (url: string) : any => {
    const { get } = new HttpClientApi();
    return useQuery({
       queryKey: ['posts'],
       queryFn: async () => {
           return await get(url, {})
       },
    });
}