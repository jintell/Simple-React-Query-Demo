import {HttpClientApi} from "../../core";
import {useQuery} from "@tanstack/react-query";

export const GetUserAlbumService = (url: string) : any => {
    const { get } = new HttpClientApi();
    return useQuery({
        queryKey: ['userAlbums'],
        queryFn: async () => {
            return await get(url, {})
        },
    });
}