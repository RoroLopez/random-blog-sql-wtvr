import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

import './index.css';

const SignUpPage = () => (
    <div className="container p-5 my-5 mx-auto border border-black rounder" id="container">
        <p className="h3 mb-4 text-center">Sign Up</p>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: "",
    password1: "",
    password2: "",
    error: null
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        
        fetch('http://localhost:3001/user/insertCredentials', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => {
            console.log(res.json())
        });
    }

    onChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        const {
            username,
            password,
            password2,
            error
        } =  this.state;

        const isInvalid = 
            password !== password2 ||
            password === '' ||
            password2 === '' || 
            username === '';

        return (
                <form onSubmit={ this.onSubmit }>
                    <div className="row">
                        <div className="col-12">
                                <label className="form-group d-flex" htmlFor="username">Username</label>
                                <input type="text" id="username" value={username} onChange={this.onChange} className="form-control mb-4" placeholder="Username" />
                            </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <label className="form-group d-flex" htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={this.onChange} className="form-control mb-4" placeholder="Password" />
                        </div>
                        <div className="col-6">
                            <label className="form-group d-flex" htmlFor="password2">Confirm password</label>
                            <input type="password" id="password2" value={password2} onChange={this.onChange} className="form-control mb-4" placeholder="Password" />
                        </div>
                    </div>
    
                    <div className="row justify-content-center">
                        <div className="col-2 col-sm-4">
                            <button className="btn btn-outline-primary my-4 buttons" type="submit">Sign up</button>
                        </div>
                    </div>
                    {error && <p>{error.message}</p>}
                </form>
        );
    }
}

const SignUpLink = () => (
    <Link className="btn btn-outline-primary my-4 buttons" to={ROUTES.SIGNUP} >Sign Up</Link>
);

export default SignUpPage;

export { SignUpLink, SignUpForm };