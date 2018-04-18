import React, { Component } from 'react';
import ResultPanel from './components/ResultPanel/ResultPanel';
import ButtonPanel from './components/ButtonPanel/ButtonPanel';
import calculate from './helpers/calculate';
import './App.css';

var inlineHeadingStyle = {
  color: 'white',
  fontSize: '22px',
  padding: '20px'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      nextNum: null,
      operation: null
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="App">
          <div style={inlineHeadingStyle}>By far, the best calculator you can find out there!</div>
          <ResultPanel 
            className="App-result" value={this.state.nextNum || this.state.total || '0'} 
          />
          <ButtonPanel 
            className="App-buttons" clickHandler={this.handleClick} 
          />
      </div>
    );
  }
}

export default App;
