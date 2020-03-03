import React from 'react';
import styled from 'styled-components';


const Wallpaper = styled.div`
    background: url(${props => props.src}) no-repeat center / cover;
    height: 100vh;
    display: flex;
    position: relative;

    // 정가운데 위치
    justify-content: center;
    flex-direction: column;
`;


const WallOpacity = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgb(0,0,0);
    opacity: ${props => props.opacity};
    position: absolute;
`;


export default function BackgroundImage({ opacity, src, children }) {
  return (
    <Wallpaper src={src}>
      <WallOpacity opacity={opacity}></WallOpacity>
      {children}
    </Wallpaper>
  )
}
