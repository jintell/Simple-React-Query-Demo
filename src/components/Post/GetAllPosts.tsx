import { GetPostService } from "../../apis";
import { Posts } from "../models/Posts";

const url = "https://jsonplaceholder.typicode.com/posts";

export const GetAllPosts = () => {
    const { isPending, isError, data: resp, error } = GetPostService(url);
    const data : []  = resp?.data;


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

    // We can assume by this point that `isSuccess === true`
    return (
        <>
            <button type="button" className="btn btn-primary">
                Total Posts <span className="badge badge-light">{data.length}</span>
            </button>
            <div className="row" style={{ marginTop: '1%' }}>
                { data.map((post: Posts) => (
                    <div className="col-lg-4" style={{ marginBottom: '1%' }} key={post.id}>
                        <div className="card" style={{ width: 'width: 18rem'}} >
                            <img src="" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <a href={`/posts/${post.id}`} className="btn btn-primary">Review</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}