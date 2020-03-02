import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { btnStyle } from 'lib/styleUtil';

const Button = styled(Link)`
    ${btnStyle}
`;


export default function LoginButton() {
  return (
    <Button to="/login">
      로그인
    </Button>
  )
}
