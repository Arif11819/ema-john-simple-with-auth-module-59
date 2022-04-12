import { faCoffee, faGlassMartiniAlt, faGlobe, faGlobeOceania } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create New Account</Link>
                </p>
                <div className='line-group'>
                    <p className='form-or-line'>
                    </p>
                    <p>or</p>
                    <p className='form-or-line'>
                    </p>
                </div>
                <div className='google-form'>
                    <p><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> <input type="submit" value="Continue with Google" /></p>
                </div>
            </div>
        </div>
    );
};

export default Login;