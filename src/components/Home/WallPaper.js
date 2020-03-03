import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { btnStyle } from 'lib/styleUtil';
import { HomeBackground, HomeBackgroundText } from 'lib/Background';
import { ArrowButton } from 'components/Home';
import BackgroundImage from 'components/Base/BackgroundImage';

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
        <BackgroundImage key={index} src={img} opacity={0.64} >
          <WallpaperInner>
            <WallpaperText>
              {HomeBackgroundText[index]}
            </WallpaperText>
            <WallpaperButton to="/login">
              2주 무료 이용 시작
            </WallpaperButton>
          </WallpaperInner>
          <ArrowButton id={index} isLast={HomeBackground.length - 1 === index} />
        </BackgroundImage>
      ))}
    </>
  )
}
