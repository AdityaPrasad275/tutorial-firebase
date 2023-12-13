import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Hi</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;