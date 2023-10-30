import {useParams} from "react-router-dom";
import {GetAlbumById} from "./GetAlbumById";

export const MyAlbum = () => {
    const { id = '', userId = '' } = useParams();
    return (
        <>
            <h3>My Album</h3>
            <hr />
            <GetAlbumById albumId={id} userId={userId} />
      </>
    )
}