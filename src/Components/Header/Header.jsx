import React, { useContext } from 'react';
import './Header.css'
// import logo from '../../images/Logo.svg'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const {user}= useContext(Authcontext);
    return (
        <nav className='header'>
           
            <img src={logo} alt="" />
            <div>
                <Link href="/">shop</Link>
            <Link to="/order">order</Link>
            <Link to="/inventory">inventory</Link>
            <Link to="/login">login</Link>
            <Link to="/signup">SignUp</Link>
           
            </div>
            
        </nav>
    );
};

export default Header;