import React, { useState } from 'react';
import './Sign-up.style.scss';

import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';

const SignUp = ({ history }) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');

    const handelChange = e => {
        const { name, value } = e.target;
        setUserCredentials({
            ...userCredentials, [name]: value
        });
    };

    const handelSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = userCredentials;

        if (error) {
            setError('');
        }

        if (password !== confirmPassword) {
            setError("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            setUserCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            history.push('/');

        } catch (error) {
            console.error(error.message);
            setError(error.message);
        }
    };

    const { displayName, email, password, confirmPassword } = userCredentials;

    return (
        <div className="sign-up-container">
            <h2 className="sign-up-title">I do not have a account</h2>
            <span>Sign up with your email and password</span>

            { error && <span className="error">{ error }</span> }

            <form onSubmit={ handelSubmit }>
                <FormInput
                    label='Display Name'
                    handelChange={ handelChange }
                    type='text'
                    name='displayName'
                    value={ displayName }
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
                    autoComplete="on"
                    required
                />
                <FormInput
                    label='Confirm Password'
                    handelChange={ handelChange }
                    type='password'
                    name='confirmPassword'
                    value={ confirmPassword }
                    autoComplete="on"
                    required
                />
                <CustomButton type='submit'>
                    SIGN UP
                </CustomButton>
            </form>
        </div>
    );
};

export default withRouter(SignUp); 