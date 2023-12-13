import { Link } from "react-router-dom";

const SignedOutLinks = () => {
    return (  
        <div>
            <ul className="right">
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
            </ul>
        </div>
    );
}
 
export default SignedOutLinks;