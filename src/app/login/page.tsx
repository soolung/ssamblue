"use client";

import LoginLayout from '@/layouts/LoginLayout';
import { useState } from 'react';
import OAuthLogin from '@/components/login/oAuthLogin';
import PasswordLogin from '@/components/login/passwordLogin';

const Login = () => {
  const [type, setType] = useState('oauth');

  const changeLoginType = (type: 'oauth' | 'password') => {
    setType(type);
  }

  return (
    <LoginLayout height={type === 'oauth' ? 501.28 : 600.57}>
      {
        type === 'oauth' ?
          <OAuthLogin
            changeLoginType={changeLoginType}
          />
          :
          <PasswordLogin
            changeLoginType={changeLoginType}
          />
      }
    </LoginLayout>
  )
}

export default Login;
