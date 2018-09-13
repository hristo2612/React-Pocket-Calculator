import React, { Component } from 'react';
import ResultPanel from './components/ResultPanel';
import ButtonPanel from './components/ButtonPanel';
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
      mainNum: "",
      secondNum: "",
      operator: "",
    };
  }

  handleButtonClick = (buttonName) => {
    const nextState = calculate(this.state, buttonName);
    this.setState(nextState);
  }

  render() {
    return (
      <div className="App">
          <div style={inlineHeadingStyle}>By far, the best calculator you can find out there!</div>
          <div className="Calculator">
            <ResultPanel 
              className="App-result" result={`${this.state.mainNum} ${this.state.operator} ${this.state.secondNum}`} 
            />
            <ButtonPanel 
              className="App-buttons" clickHandler={this.handleButtonClick} 
            />
          </div>
      </div>
    );
  }
}

export default App;
