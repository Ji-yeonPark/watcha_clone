import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { btnStyle } from 'lib/styleUtil';
import { HomeBackground, HomeBackgroundText } from 'lib/Background';

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
    opacity: .63;
    position: absolute;
`;
const WallpaperInner = styled.div`
    position: relative;
    z-index: 100;
    text-align: center;
`;
const WallpaperText = styled.div`
      font-size: 3.5vw;
      color: white;
      font-weight: 400;
`;
const WallpaperButton = styled(Link)`
    ${btnStyle}
    color: white;
    background-color: #FC426A;
    font-weight: 700;
    font-size: 1.38vw;
    padding: 0 1.56vw;
    height: 4.2vw;
    line-height: 4.2vw;
`;

export default function WallPaper() {
  return (
    <>
      {HomeBackground.map((img, index) => (
        <Wallpaper key={index} src={img}>
          <WallOpacity></WallOpacity>
          <WallpaperInner>
            <WallpaperText>
              {HomeBackgroundText[index]}
            </WallpaperText>
            <WallpaperButton to="/login">
              2주 무료 이용 시작
            </WallpaperButton>
          </WallpaperInner>
        </Wallpaper>
      ))}
    </>
  )
}
