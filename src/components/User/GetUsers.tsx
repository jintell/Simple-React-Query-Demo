import { GetUserService } from "../../apis";
import { User } from "../models/User";

const URL = 'https://jsonplaceholder.typicode.com/users';
export const GetUsers = () => {
    const { isPending, isError, data: resp, error } = GetUserService(URL);
    const userLists : []  = resp?.data;

    if (isPending) {
        return (
            <div className="d-flex justify-content-center" style={{ marginTop: '25%'}}>
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
        <>
            <button type="button" className="btn btn-primary">
                Total Users <span className="badge badge-light">{userLists.length}</span>
            </button>
            <div className="row" style={{ marginTop: '1%' }}>
                {userLists.map((user: User) => (
                    <div className="col-lg-4" style={{ marginBottom: '1%' }} key={user.id}>
                        <div className="card" style={{ width: 'width: 18rem'}} >
                            <img src={`https://picsum.photos/id/${user.id}/200`} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{user.name} ({user.username})</h5>
                                <p className="card-text">
                                    Works with {user.company.name}<br />
                                    mail me @ {user.email}<br />
                                    Call me on {user.phone}<br />
                                    Zip Code {user.address.zipcode}<br />
                                </p>
                                <a href={`/users/${user.id}`} className="btn btn-primary">Review</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}