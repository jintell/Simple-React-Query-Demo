import {GetAllPosts} from "../../components/Post";


export const Posts = () => {
    return (
        <div className="fluid-container" >
            <h3 style={{ textAlign: 'center' }}>All Posts</h3>
            <hr />
            <GetAllPosts />
        </div>
    )
}