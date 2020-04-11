import React, { useState } from 'react';
import './Sign-in.style.scss';

import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handelChange = e => {
        const { name, value } = e.target;
        setUserCredentials({
            ...userCredentials, [name]: value
        });
    };

    const handelSubmit = e => {
        e.preventDefault();
        setUserCredentials({
            email: '',
            password: ''
        });
    };

    return (
        <div className="sign-in-container">
            <h2 className="sign-in-title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={ handelSubmit }>
                <FormInput
                    handelChange={ handelChange }
                    type='email'
                    value={ email }
                    name='email'
                    label='Email'
                />
                <FormInput
                    handelChange={ handelChange }
                    type='password'
                    value={ password }
                    name='password'
                    label='Password'
                    autoComplete="on"
                />
                <div className="button-container">
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>

        </div>
    );
};

export default SignIn;