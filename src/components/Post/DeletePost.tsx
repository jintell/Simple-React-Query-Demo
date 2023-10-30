import {DeletePostService} from "../../apis";

const URL = "https://jsonplaceholder.typicode.com/posts";
export const DeletePost = (prop : any) => {
    const { userPost, updateUserPost } = prop;
    const deletePost= DeletePostService(`${URL}/${userPost?.id}`);

    const removePost = () => {
        deletePost.mutate();
        console.log(deletePost);
        updateUserPost(null, '');
    }

    return (
        <>
            <button className="btn btn-danger btn-lg"
                    onClick={removePost}>
                Confirm Delete
            </button>
        </>
    );
}