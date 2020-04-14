import React, { useState } from 'react';
import './Sign-in.style.scss';

import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';
import firebase, { auth } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';

const SignIn = ({ history }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const { email, password } = userCredentials;

    const handelChange = e => {
        const { name, value } = e.target;
        setUserCredentials({
            ...userCredentials, [name]: value
        });
    };

    const handelSignInWithGoogle = () => {
        // Using a popup.

        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        auth.signInWithPopup(provider);
        history.push('/');
    };

    const handelSubmit = async e => {
        e.preventDefault();

        const { email, password } = userCredentials;

        setError('');

        try {
            await auth.signInWithEmailAndPassword(
                email,
                password
            );

            setUserCredentials({
                email: '',
                password: ''
            });

            history.push('/');

        } catch (error) {
            console.error(error.message);
            setError(error.message);
        }
    };

    return (
        <div className="sign-in-container">
            <h2 className="sign-in-title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            { error && <span className="error">{ error }</span> }

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
                    autoComplete="on"
                    required
                />
                <div className="button-container">
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={ handelSignInWithGoogle } isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>

        </div>
    );
};

export default withRouter(SignIn);