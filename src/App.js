import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OnLoad from './OnLoad';
import OnEvent from './OnEvent';

const DEMOS = {
  ON_LOAD: 'ON_LOAD',
  ON_EVENT: 'ON_EVENT'
}

class App extends Component {
  state = {
    demo: DEMOS.ON_LOAD
  }

  render() {
    const { demo } = this.state;
    let demoComponent;
    if (demo === DEMOS.ON_LOAD) {
      demoComponent = <OnLoad/>;
    } else if (demo === DEMOS.ON_EVENT) {
      demoComponent = <OnEvent/>;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <button onClick={this.setOnLoad}>On Load</button>
          <button onClick={this.setOnEvent}>On Event</button>
        </div>
        <div className="App-data">
          {demoComponent}
        </div>
      </div>
    );
  }

  setOnLoad = () => {
    this.setState({
      demo: DEMOS.ON_LOAD
    });
  }

  setOnEvent = () => {
    this.setState({
      demo: DEMOS.ON_EVENT
    });
  }
}

export default App;
