import React, { Component } from 'react';
import { WallPaper, PanelMenu } from 'components/Home';


export default class HomeContainer extends Component {
  render() {
    return (
      <main>
        <PanelMenu />
        <WallPaper />
      </main>
    )
  }
}
