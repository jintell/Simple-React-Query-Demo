import axios from 'axios';
export class HttpClientApi {
    post = async (url: string, payload: any, headers: any) : Promise<any> => {
        return await axios.post(url, payload, headers);
    };

    put = async (url: string, payload: any, headers: any) : Promise<any>  => {
        return await axios.put(url, payload, headers);
    };

    get = async (url: string, headers: any) : Promise<any>  => {
        return await axios.get(url, headers);
    };
    remove = async (url: string, headers: any) : Promise<any>  => {
        return await axios.delete(url, headers);
    };

}
