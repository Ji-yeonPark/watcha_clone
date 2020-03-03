import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 1rem;
`;

const AuthContent = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
);

export default AuthContent;