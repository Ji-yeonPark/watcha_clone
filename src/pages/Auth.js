import React from 'react';
import { Route } from 'react-router-dom';
import { Login, Register, AuthWrapper } from 'components/Auth';


// import HomeContainer from 'containers/HomeContainer';

export default function Auth() {
  return (
    <AuthWrapper>
      <Route path="/auth/sign_in" component={Login} />
      <Route path="/auth/sign_up" component={Register} />
    </AuthWrapper>
  )
}
