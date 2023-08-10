import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">
                {/* <img src={Logo} alt="logo kasa" /> */}
            </Link>
            <nav>
                <NavLink
                    to="/list"


                >
                    View Current Employees
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;