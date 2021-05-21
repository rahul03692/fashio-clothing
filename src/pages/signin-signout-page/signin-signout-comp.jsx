import React from 'react';

import './signin-signout-styles.scss';
import SignIn from '../../components/sign-in/sign-in-comp';
import SignUp from '../../components/sign-up/sign-up-comp';

const SignInSignOut = () => (
    <div className='sign-in-sign-out'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignOut; 