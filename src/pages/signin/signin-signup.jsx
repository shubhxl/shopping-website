import React from 'react';
import './signin-signup.scss'
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

export default function SignInPage() {
    return (
        <div className='sign-in-and-sign-up'>
             <SignIn />
             <SignUp />
        </div>
    )
}
