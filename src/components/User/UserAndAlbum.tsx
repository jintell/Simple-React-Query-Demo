import {useParams} from "react-router-dom";
import {GetUserById} from "./GetUserById";
import {GetUserAlbums} from "./GetUserAlbums";
export const UserAndAlbum = () => {
    const { id = ''} = useParams();
    return (
        <div className="row">
            <div className="col-md-6">
                <GetUserById userId={id}/>
            </div>
            <div className="col-md-6">
                <GetUserAlbums userId={id} />
            </div>
        </div>
    )
}