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
      total: null,
      nextNum: null,
      operation: null,
      currentOperation: null, // this will include the numbers and the operator between them to display
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName), () => {
      const currState = this.state;
      if ( currState.nextNum && currState.currentOperation && !currState.total && currState.operation !== "=" ) {
        this.setState({ currentOperation: currState.currentOperation + ` ${currState.nextNum }`})
      } else if ( currState.nextNum && !currState.operation && !currState.total) {
        this.setState({ currentOperation: currState.nextNum + '' });
      } else if ( currState.nextNum && currState.operation !== "=" ) {
        this.setState({ currentOperation: currState.currentOperation + ` ${currState.nextNum}` });
      } else if ( !currState.nextNum && currState.operation && currState.operation !== "=" && currState.total ) {
        this.setState({currentOperation: currState.currentOperation + ` ${currState.operation}` });
      }
    });
  }

  render() {
    return (
      <div className="App">
          <div style={inlineHeadingStyle}>By far, the best calculator you can find out there!</div>
          <div className="Calculator">
            <ResultPanel 
              className="App-result" result={this.state.currentOperation || this.state.total || '0'} 
            />
            <ButtonPanel 
              className="App-buttons" clickHandler={this.handleClick} 
            />
          </div>
      </div>
    );
  }
}

export default App;
