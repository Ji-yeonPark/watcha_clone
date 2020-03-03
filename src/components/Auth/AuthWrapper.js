import React from 'react';
import styled from 'styled-components';
import { AuthBackground } from 'lib/Background';
import BackgroundImage from 'components/Base/BackgroundImage';
import HeaderContainer from 'containers/Base/HeaderContainer';

const Container = styled.div`
    display: flex;
    width: 300px;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    z-index: 100;
`;

export default function AuthWrapper({ children }) {
  return (
    <>
      <HeaderContainer />
      <BackgroundImage opacity={0.74} src={AuthBackground}>
        <Container>
          {children}
        </Container>
      </BackgroundImage>
    </>
  )
}
