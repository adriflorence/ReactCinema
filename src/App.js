import React, { Component } from 'react';
import ScreeningBox from './containers/ScreeningBox.js';
import Skeleton from './components/Skeleton.js';

class App extends Component {
  render() {
    return (
      <div>
        <ScreeningBox/>
        <Skeleton/>
      </div>
    );
  }
}

export default App;
