import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.div`
    background-color: #fff;
    width: 1.25vw;
    height: 1.25vw;
    cursor: pointer;
    border-radius: 50%;
    margin: 0px 0px 1.1vw;
    opacity: ${props => props.target === props.id ? '1' : '0.2'}
`;

export default class PanelButton extends Component {


  handleClick = (id) => {
    window.scrollTo(0, window.innerHeight * id)
    console.log(window.innerHeight * id)
  }

  render() {
    const { id, target } = this.props;

    return (
      <Button id={id} target={target} onClick={() => this.handleClick(id)} />
    )
  }
}


