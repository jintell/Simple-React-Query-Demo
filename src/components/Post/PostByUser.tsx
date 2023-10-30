import {useParams} from "react-router-dom";
import {GetUserPosts} from "../User/GetUserPosts";
import {CreatePost} from "./CreatePost";
import {useState} from "react";
import {EditPost} from "./EditPost";
import {DeletePost} from "./DeletePost";

export const PostByUser = () => {
    const { userId = '' } = useParams();
    const [userPost, setUserPost] = useState(null);
    const [action, setAction] = useState('');

    const updateUserPost = ( post: any, type : string ) => {
        setUserPost(post);
        setAction(type);
    }

    return (
          <div className="row">
            <div className="col-lg-5">
                <GetUserPosts userId={userId} updatePost={updateUserPost} />
            </div>
              <div className="col-lg-5">
                  {userPost === null ?
                      <CreatePost userId={userId} /> :
                      (action === 'edit') ?
                      <EditPost userPost={userPost} updateUserPost={updateUserPost} />
                          : <DeletePost  userPost={userPost} updateUserPost={updateUserPost} />
                  }
              </div>
          </div>
    )

}