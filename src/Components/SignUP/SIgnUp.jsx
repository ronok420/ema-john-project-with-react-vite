import React from 'react';
import './SIgnUP.css'

const SIgnUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign UP</h2>
            <form >
                <div className="form-control">
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="" />

                </div>
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="" />

                </div>
                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="" />
                    <label htmlFor="password">confirm password</label>
                    <input type="password" name="confirm" id="" />

                </div>
                <input className='btn-btn-submit' type="submit" value="signup" />
            </form>
        </div>
    );
};

export default SIgnUp;