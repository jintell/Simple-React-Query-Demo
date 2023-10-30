import { GetUserService} from "../../apis";
import { User } from "../models/User";

const URL = 'https://jsonplaceholder.typicode.com/users';

export const GetUserById = (param: any, ) => {
    const { userId } = param;
    const { isPending, isError, data: resp, error } = GetUserService(`${URL}/${userId}`);
    const user : User  = resp?.data;
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

    return (
        <div className="card" style={{ width: '70%', margin: 'auto 5%' }}>
            <img src={`https://picsum.photos/id/${user.id}/200`} className="card-img-top"
                 style={{  height: '300px' }}
                 alt=""/>
            <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                <p className="card-text"><strong>{user.name}</strong> works
                     @ <span style={{ fontStyle: 'italic', color: '#f53a3a', padding: '3% 0' }}>
                        {user.company.name}
                </span> | {user.company.bs} | {user.company.catchPhrase}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{user.address.suite} {user.address.street} {user.address.city}
                    {user.address.zipcode}</li>
                <li className="list-group-item">{user.address.zipcode}</li>
                <li className="list-group-item">{user.email}</li>
                <li className="list-group-item">{user.phone}</li>
            </ul>
            <div className="card-body">
                <a href={`http://${user.website}`} className="card-link" target='_blank' rel="noreferrer">Blog Site</a>
                <a href='/' className="card-link" style={{ marginLeft: '5%' }} >Go To Home</a>
                <a href={`/posts/user/${userId}`} className="btn btn-dark" style={{ marginLeft: '5%' }} >My Posts</a>
            </div>
        </div>
    );

}