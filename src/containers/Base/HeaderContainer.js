import React, { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/Base/Header';
import LoginButton from 'components/Base/Header/LoginButton';

const HeaderList = styled.ul`
    display: flex;
    position: relative;
    list-style-type: none;
    margin: 0;
    padding: 0;
    right: -11px;
    float: right;
`;

class HeaderContainer extends Component {
  render() {
    return (
      <Header>
        <HeaderList>
          <li>
            <LoginButton />
          </li>
        </HeaderList>

      </Header>
    );
  }
}

export default HeaderContainer;