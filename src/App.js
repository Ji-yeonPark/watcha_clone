import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages';
import HeaderContainer from 'containers/Base/HeaderContainer';



class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Route exact path="/" component={Home} />
      </div>
    )
  }
}

export default App;
