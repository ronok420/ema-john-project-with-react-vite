import React, { useContext, useState } from 'react';
import './SIgnUP.css'
import { Link } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';

const SIgnUp = () => {
    const { createUer } = useContext(Authcontext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSignup = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;

        if (password !== confirmPass) {
            setError('password did not match')

            return;
        }
        if (password < 6) {
            setError('give at leat 6 characters');
            return;
        }
        // console.log(name, ',', email, ',', password, ',', confirmPass);
        setError('');

        createUer(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setSuccess('signUP success')
            })
            .catch(error => console.error(error))



    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign UP</h2>
            <form onSubmit={handleSignup} >
                <div className="form-control">
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="" required />

                </div>
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="" required />

                </div>
                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="" required />
                    <label htmlFor="password">confirm password</label>
                    <input type="password" name="confirmPass" id="" required />

                </div>
                <input className='btn-btn-submit' type="submit" value="signup" />
            </form>
            <p><small>already have an account?<Link to="/login">login</Link></small></p>
            <p style={{ color: 'red' }}>{error}</p>
            <p style={{ color: 'green' }}>{success}</p>
        </div>
    );
};

export default SIgnUp;