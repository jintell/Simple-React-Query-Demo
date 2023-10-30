import {UserAlbum} from "../models/UserAlbum";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {GetUserAlbumService} from "../../apis";

const URL = 'https://jsonplaceholder.typicode.com/users';
export const GetUserAlbums = (param : any, )=> {
    const { userId } = param;
    const { isPending, isError, data: resp, error } = GetUserAlbumService(`${URL}/${userId}/albums`);
    const albums : []  = resp?.data;
    const navigate : NavigateFunction = useNavigate();

    if (isPending) {
        return (
            <div style={{ margin: '25% 50%'}}>
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className="list-group" style={{ width: '70%' }}>
            <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                My Album
            </button>
            {albums.map((album : UserAlbum) => (
                <button type="button"
                        className="list-group-item list-group-item-action"
                        key={album.id}
                        onClick={() => navigate(`/users/${userId}/albums/${album.id}`)}
                >
                    {album.title}
                </button>
            ))}
        </div>
    );
}