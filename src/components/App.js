import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(button) {
    const data = calculate(this.state, button.name);
    this.setState(() => ({
      total: data.total,
      next: data.next,
      operation: data.operation,
    }));
  }

  render() {
    return (
      <div id="app">
        <h1>React Calculator</h1>
        <Display result={this.state} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}


export default App;
