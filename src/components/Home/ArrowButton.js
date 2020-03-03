import React from 'react';
import styled from 'styled-components';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 5.208333333333334vw;
    left: 50%;
    z-index: 100;
`;
const Button = styled.button`
    display: inline-block;
    width: 3.3vw;
    height: 3.3vw;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    background-color: rgba(0,0,0,0);
`;


export default function ArrowButton({ id, isLast }) {

  const handleClick = (id, isLast) => {
    if (!isLast) {
      // 다음 panel로 이동
      window.scrollTo({ top: window.innerHeight * (id + 1), behavior: 'smooth' });
    } else {
      // 맨 위로 이동
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <ButtonContainer>
      <Button onClick={() => handleClick(id, isLast)}>{isLast ? <FaArrowUp size={16} /> : <FaArrowDown size={16} />}</Button>
    </ButtonContainer>
  )
}
