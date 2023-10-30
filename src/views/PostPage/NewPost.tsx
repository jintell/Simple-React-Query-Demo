import {PostByUser} from "../../components/Post/PostByUser";

export const NewPost = () => {
    return (
        <div className="container">
            <h2 style={{ textAlign: 'center' }}> User Posts </h2>
            <hr />
            <PostByUser />
        </div>
    )
}