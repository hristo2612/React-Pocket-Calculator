import React, { Component } from 'react';
import ResultPanel from './components/ResultPanel/ResultPanel';
import ButtonPanel from './components/ButtonPanel/ButtonPanel';
import calculate from './helpers/calculate';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      nextNumber: null,
      operation: null
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="App">
          <ResultPanel className="App-result" value={this.state.nextNumber || this.state.total || '0'} />
          <ButtonPanel className="App-buttons" clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
