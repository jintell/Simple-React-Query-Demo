import {Posts} from "../models/Posts";
import {GetPostService} from "../../apis";

const URL = "https://jsonplaceholder.typicode.com/users/";
export const GetUserPosts = (prop: any) => {
    const {userId, updatePost} = prop;
    const {isPending, isError, data: resp, error} = GetPostService(`${URL}/${userId}/posts`);
    const posts: [] = resp?.data;

    if (isPending) {
        return (
            <div style={{margin: '25% 50%'}}>
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    const onUpdatePost = (event: React.MouseEvent<HTMLButtonElement>, post: Posts) => {
        event.preventDefault();
        updatePost(post, 'edit');
    }

    const onDeletePost = (event: React.MouseEvent<HTMLButtonElement>, post: Posts) => {
        event.preventDefault();
        updatePost(post, 'delete');
    }

    const randomTimeInHours = () : string => {
        const randomNum = Math.random() * 2359;
        return  parseToProperTime(Math.floor(randomNum));
    }

    const parseToProperTime = (time : number) : string => {
        const noOfDigits = time.toString().length;
        if(noOfDigits < 2) return '0' + time + '00';
        else if(noOfDigits < 3) return '00' + ((parseInt(time.toString().substring(noOfDigits - 2, noOfDigits)) > 59) ? time % 60 : time);
        else if(noOfDigits < 4) return '0' + ((parseInt(time.toString().substring(noOfDigits - 2, noOfDigits)) > 59) ?
            time.toString().substring(0, 1) + (parseInt(time.toString().substring(noOfDigits - 2, noOfDigits)) % 60) : time);
        else return '' + (parseInt(time.toString().substring(noOfDigits - 2, noOfDigits)) > 59 ?
                time.toString().substring(0, 2) + (parseInt(time.toString().substring(2, noOfDigits)) % 60) : time);
    }

    return (
        <>
            {posts.map((post:Posts)=> (
                <div className="card" key={post.id}>
                    <h5 className="card-header" style={{ fontStyle: 'italic', }}>Posted @ {randomTimeInHours()} hours</h5>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                        <button className="btn btn-primary" onClick={(e) => onUpdatePost(e, post)}>
                            Edit Post
                        </button>
                        <button className="btn btn-danger"
                                style={{ marginLeft: '2%'}}
                                onClick={(e) => onDeletePost(e, post)}>
                            Delete Post
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}