import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  padding: 0 4%;
  box-sizing: border-box;
  // background: rgb(20, 21, 23);
  z-index: 500;
`;

const Logo = styled.a`
    position: relative;
    z-index: 10001;
    float: left;
    width: 180px;
    height: 72px;
    background: url('/logo.png') no-repeat center / cover;
`;


export default function Header({ children }) {
  return (
    <Navigation>
      <Logo href="/" />
      {children}
    </Navigation>
  )
}
