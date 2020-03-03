import React, { Component } from 'react';
import styled from 'styled-components';
import { PanelButton } from 'components/Home';
import { HomeBackground } from 'lib/Background';

const Panel = styled.div`
    position: fixed;
    top: 40%;
    right: 50px;
    z-index: 101;
`;


export default class PanelMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      target: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    // 윈도우 높이 : window.innerHeight
    // 스크롤 전체 높이 : document.body.scrollHeight
    // 현재 스크롤 위치 : window.pageYOffset
    const remainder = window.pageYOffset % window.innerHeight;
    let target = parseInt(window.pageYOffset / window.innerHeight);

    // 스크롤이 절반을 넘어간 경우 target + 1
    if (remainder + 10 > window.innerHeight * 0.5) {  // (현재 스크롤 위치 + 10) > (화면 높이 /2)
      target = target + 1;
    }
    this.setState({
      target
    });
  }

  render() {
    return (
      <Panel>
        {HomeBackground.map((img, index) => (
          <PanelButton key={index} id={index} target={this.state.target} />
        ))}
      </Panel>
    )
  }
}
