import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form >
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
        </div>
    );
};

export default Login;