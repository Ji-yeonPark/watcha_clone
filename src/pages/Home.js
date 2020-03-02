import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { btnStyle } from 'lib/styleUtil';

const Background = [
  'https://images.watcha.net/updatable_images/2132/original/55ae1d56044a9db73f5cc0165fcf16c38e1988a5.jpg',
  'https://images.watcha.net/updatable_images/2111/original/add979f243a38ac91e1ce10ae1633e64d5aa7c67.jpg',
  'https://images.watcha.net/updatable_images/2096/original/9129b34f0bda5a0bb606c91436b9612665776678.jpg',
  'https://images.watcha.net/updatable_images/2135/original/707ba011debe9d240c419b83bb89a25903958be7.jpg',
  'https://images.watcha.net/updatable_images/2101/original/97ee412bcf6867106f1dcdf1025eaf1524d9d4d0.jpg'
]

const BackgroundText = [
  "영화, 드라마, 예능, 다큐멘터리를 무제한으로",
  "여럿이 함께, 하나의 이용권으로",
  "이제 TV로 최고의 화질을 경험하세요",
  "이동 중에도 감상을 멈추지 마세요",
  "스마트폰, 태블릿, TV, PC, 크롬캐스트, Android TV에서"
]

const Main = styled.main``;
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
`

export default function Home() {
  return (
    <Main>
      {Background.map((img, index) => (
        <Wallpaper key={index} src={img}>
          <WallOpacity></WallOpacity>
          <WallpaperInner>
            <WallpaperText>
              {BackgroundText[index]}
            </WallpaperText>
            <WallpaperButton to="/login">
              2주 무료 이용 시작
            </WallpaperButton>
          </WallpaperInner>
        </Wallpaper>
      ))}
    </Main>
  )
}
