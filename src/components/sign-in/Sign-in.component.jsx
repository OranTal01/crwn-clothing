import React, { useState } from 'react';
import './Sign-in.style.scss';

import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';
const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState(false);

    const { email, password } = userCredentials;

    const handelChange = e => {
        const { name, value } = e.target;
        setUserCredentials({
            ...userCredentials, [name]: value
        });
    };

    const handelSubmit = e => {
        e.preventDefault();
        if (!(email && password)) setError(true);
    };



    return (
        <div className="sign-in-container">
            <h2 className="sign-in-title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            { error && <p>email or password are invalid</p> }
            <form onSubmit={ handelSubmit }>
                <FormInput
                    handelChange={ handelChange }
                    type='email'
                    value={ email }
                    name='email'
                    label='Email'
                    required
                />
                <FormInput
                    handelChange={ handelChange }
                    type='password'
                    value={ password }
                    name='password'
                    label='Password'
                    required
                />
                <div className="button-container">
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type='button'>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;