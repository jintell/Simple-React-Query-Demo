import {GetUsers} from "../../components/User";


export const Users = () => {
    return (
        <div className="fluid-container" >
            <h3 style={{ textAlign: 'center' }}>User List</h3>
            <hr />
            <GetUsers />
        </div>
    )
}