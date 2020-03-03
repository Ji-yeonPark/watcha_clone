import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { btnStyle } from 'lib/styleUtil';

const Button = styled(Link)`
    ${btnStyle}
`;


export default function LoginButton() {

  const changeButton = () => {
    // 로그인/회원가입 버튼 타이틀 변경
    let title = "로그인";
    let link = '/auth/sign_in';

    if (window.location.pathname === '/auth/sign_in') {
      title = "회원가입";
      link = "/auth/sign_up";
    }
    return <Button to={link}> {title} </Button>
  }

  return (
    <>
      {changeButton()}
    </>
  )
}
