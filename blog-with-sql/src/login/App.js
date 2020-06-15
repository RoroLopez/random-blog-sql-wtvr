import React, { Component } from 'react';

import { SignUpLink } from '../signup/App';

import "./index.css"

const LoginPage = () => (
    <div className="container p-5 my-5 mx-auto border border-black rounder" id="container">
        <p className="h3 mb-4 text-center">Login</p>
        <LoginForm />
    </div>
);

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    onSignUp = () => {
        
    }

    render() {
        return (
            
            <form action="">
                <div className="row">
                    <div className="col-6">
                        <label className="form-group d-flex" htmlFor="username">Username</label>
                        <input type="text" id="username" className="form-control mb-4" placeholder="Username" />
                    </div>
                    <div className="col-6">
                        <label className="form-group d-flex" htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control mb-4" placeholder="Password" />
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-2">
                        <button className="btn btn-outline-primary my-4 buttons" type="submit">Sign in</button>
                    </div>
                    <div className="col-2">
                        <SignUpLink />
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginPage;

export { LoginForm };