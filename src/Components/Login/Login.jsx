import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {userSignIn} =useContext(Authcontext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate= useNavigate();
    const location =useLocation();
    console.log(location);
    const from=location.state?.from?.pathname  ||  '/'; 

    const handleSIgnIn=(e)=>{
        setSuccess('');
        setError('');
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            form.reset();
            setSuccess('login success')
            navigate(from,{replace:true})

        })
        .catch(error=>{
            console.error(error);
            setError('!give correct password');
        })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSIgnIn}>
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="" />
                   
                </div>
                <div className="form-control">
                <label htmlFor="password">password</label>
                    <input type="password" name="password" id="" />
                   
                </div>
                <input className='btn-btn-submit' type="submit" value="login" />
            </form>
            <p><small>new to ema-john?<Link to="/signup">signup</Link></small></p>
            <p style={{ color: 'green' }}>{success}</p>
            <p style={{ color: 'red' }}>{error}</p>
        </div>
    );
};

export default Login;