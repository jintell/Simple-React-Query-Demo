import {useState} from "react";
import {EditPostService} from "../../apis/services/PostService";


const URL = "https://jsonplaceholder.typicode.com/posts";
export const EditPost = (prop : any) => {
    const { userPost, updateUserPost } = prop;
    const [title, setTitle] = useState(userPost?.title);
    const [body, setBody] = useState(userPost?.body);
    const updateSelectedPost = EditPostService(`${URL}/${userPost?.id}`);
    const updatePost = (event: any) => {
        event.preventDefault();
        if(title.length === 0) {
            alert("Please provide the title");
            return;
        } if(body.length === 0) {
            alert("Please provide the body");
            return;
        }
        userPost.title = title;
        userPost.body = body;
        updateSelectedPost.mutate(JSON.stringify(userPost));
        updateUserPost(null, 'edit');
        setTitle('');
        setBody('');
    }

    return (
        <>
            {updateSelectedPost.isError ? (
                <div className="alert alert-danger" role="alert">
                    Sorry an  error occurred: {updateSelectedPost.error?.message}
                </div>
            ) : null
            }

            {updateSelectedPost.isSuccess? (
                <div className="alert alert-success" role="alert">
                    Your Post was updated Successfully!
                </div>
            ) : null
            }
            <form onSubmit={updatePost}>
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
                        <button type="submit" className="btn btn-primary">Save Edit</button>
                    </div>
                </div>
            </form>
        </>
    );
}