import {Posts} from "../models/Posts";
import {CreatePostService} from "../../apis";
import {useState} from "react";

class PostsImpl implements Posts {
    body: string = '';
    id: number | undefined;
    title: string = '';
    userId: number = 0;
}

const URL = "https://jsonplaceholder.typicode.com/posts";
export const CreatePost = (prop : any) => {
    const { userId } = prop;
    const post: Posts = new PostsImpl();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const addNewPost = CreatePostService(URL);
    const createNewPost = (event: any) => {
        event.preventDefault();
        if(title.length === 0) {
            alert("Please provide the title");
            return;
        } if(body.length === 0) {
            alert("Please provide the body");
            return;
        }
        post.title = title;
        post.body = body;
        post.userId = parseInt(userId);
        addNewPost.mutate(JSON.stringify(post));
        setTitle('');
        setBody('');
    }

    return (
        <>
            {addNewPost.isError ? (
                    <div className="alert alert-danger" role="alert">
                        Sorry an  error occurred: {addNewPost.error?.message}
                    </div>
                ) : null
            }

            {addNewPost.isSuccess? (
                    <div className="alert alert-success" role="alert">
                        Your New Post hase been added Successfully!
                    </div>
                ) : null
            }
            <form onSubmit={createNewPost}>
                <div className="form-group row">
                    <label htmlFor="title2" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"
                               value={title}
                               onChange={(e)=> setTitle(e.target.value)}
                               id="title2" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="body2" className="col-sm-2 col-form-label">Message</label>
                    <div className="col-sm-10">
                        <textarea className="form-control"
                                  rows={3}
                               value={body}
                               onChange={(e)=> setBody(e.target.value)}
                               id="body2" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Post</button>
                    </div>
                </div>
            </form>
        </>
    );

}