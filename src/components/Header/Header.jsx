import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_hrnet.jpg';

const Header = () => {
    return (
        <div className='containerHeader'>
            <Link to="/">
                <img src={Logo} alt="logo Hrnet" />
            </Link>
            <nav>
                <NavLink
                    to="/list"
                    className={({ isActive }) =>
                        isActive ? "navButton " : "noActive"
                    }
                >
                    View Current Employees
                </NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "navButton " : "noActive"
                    }
                >
                    Home
                </NavLink>

            </nav>
        </div>
    );
};

export default Header;
