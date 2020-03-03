import React, { Component } from 'react';
import styled from 'styled-components';
import { btnStyle } from 'lib/styleUtil';

import { AuthContent } from 'components/Auth';

const Form = styled.form`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 21px;
`;
const InputContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
`;
const Input = styled.input`
    width: 100%;
    font-size: 16px;
    letter-spacing: -0.5px;
    line-height: normal;
    border-color: rgba(154, 151, 161, 0.2);
    padding: 10px 44px 10px 14px;
    border-radius: ${props => props.isLast ? "0px 0px 4px 4px" : "4px 4px 0px 0px"};
    border-top-width: 1px;
    
    &:focus {
      outline: none;
    }
`;
const Button = styled.button`
    ${btnStyle}
    color: white;
    background-color: ${props => props.color};
    border: 0;
    font-weight: 700;
    font-size: 16px;
    padding: 0 1.56vw;
    height: 47px;
    line-height: 47px;
    text-align: center;
    width: 100%;

    &.disabled {
      opacity: 0.3;
    }

    &.facebook {
      margin-top: 0;
    }
`;
const FaceBookLoginContainer = styled.div`
    padding-top: 15px;

    p {
      color: #d5d4d7;
    font-size: 12px;
    }
`;


class Login extends Component {
  render() {
    return (
      <AuthContent title="로그인">
        <Form>
          <InputContainer>
            <Input name="email" placeholder="이메일을 입력해주세요" />
          </InputContainer>
          <InputContainer>
            <Input name="password" placeholder="비밀번호(6자 이상)" isLast={true} />
          </InputContainer>
          <InputContainer>
            <Button type="submit" className="disabled" color="#FC426A">로그인</Button>
          </InputContainer>
        </Form>
        <FaceBookLoginContainer>
          <p>이전에 Facebook으로 가입하셨나요?</p>
          <Button color="rgb(64, 101, 179)" className="facebook">FaceBook으로 로그인</Button>
        </FaceBookLoginContainer>
      </AuthContent>
    );
  }
}

export default Login;