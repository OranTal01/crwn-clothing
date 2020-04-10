import React, { useState } from 'react';
import './Sign-up.style.scss';

import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';

const SignUp = () => {

    const [userCredentials, setUserCredentials] = useState({
        userName: '',
        email: '',
        password: '',
        password2: ''
    });
    const [error, setError] = useState(false);
    const { userName, email, password, password2 } = userCredentials;

    const handelChange = e => {
        const { name, value } = e.target;
        setUserCredentials({
            ...userCredentials, [name]: value
        });
    };

    const handelSubmit = e => {
        e.preventDefault();
        if (!(userName && email && password && password2)) setError(true);
    };

    return (
        <div className="sign-up-container">
            <h2 className="sign-up-title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            { error && <p>email or password are invalid</p> }
            <form onSubmit={ handelSubmit }>
                <FormInput
                    label='Display Name'
                    handelChange={ handelChange }
                    type='text'
                    name='userName'
                    value={ userName }
                    required
                />
                <FormInput
                    label='Email'
                    handelChange={ handelChange }
                    type='email'
                    name='email'
                    value={ email }
                    required
                />
                <FormInput
                    label='Password'
                    handelChange={ handelChange }
                    type='password'
                    name='password'
                    value={ password }
                    required
                />
                <FormInput
                    label='Confirm Password'
                    handelChange={ handelChange }
                    type='password'
                    name='password2'
                    value={ password2 }
                    required
                />
                <CustomButton type='submit'>
                    SIGN UP
                </CustomButton>
            </form>
        </div>
    );
};

export default SignUp; 