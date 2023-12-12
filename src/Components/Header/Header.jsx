import React, { useContext } from 'react';
import './Header.css'
// import logo from '../../images/Logo.svg'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(Authcontext);

    // console.log(user);
    const handleLogout= ()=>{
        logOut()
        .then(()=>console.log('sign out')
        )
        .catch(()=>{})
    }



    return (
        <nav className='header'>

            <img src={logo} alt="" />
            <div>
                <Link href="/">shop</Link>
                <Link to="/order">order</Link>
                <Link to="/inventory">inventory</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">SignUp</Link>
{   user &&             <Link onClick={handleLogout} to="/login">logout</Link>
}                
               
                {user &&  
                <p style={{color:'white',marginLeft:'80%'}}>{user.email}</p>
                
                }
               
                
                
            </div>

        </nav>
    );
};

export default Header;