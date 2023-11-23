import React from 'react';
import './Login.css';

const Login = () => {
    return (
    <>
        <p>Login to access the full dashboard</p>
            <label htmlFor="email" className="form-label">Email: </label>
            <input type = "email" id="email" name="email" className="form-input"/>
            <label htmlFor="password" className="form-label">Password: </label>
            <input type = "password" id="password" name="password" className="form-input"/>
            <button className="button-body">OK</button>
    </>
    )
}

export default Login;