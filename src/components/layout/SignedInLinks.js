import { Link } from "react-router-dom";

const SignedInLinks = () => {
    return ( 
        <div>
            <ul className="right">
                <li><Link to="create-project">Create New Project</Link></li>
                <li><Link to="/">Log Out</Link></li>
                <li><Link to="/" className="btn btn-floating pink lighten-1">NN</Link></li>
            </ul>
        </div>
     );
}
 
export default SignedInLinks;