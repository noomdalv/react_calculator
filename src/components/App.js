import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { calculate } from '../logic/calculate'; // eslint-disable-line no-unused-vars

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: null,
			next: null,
			operation: null
		}
	}

	handleClick(buttonName) {
		let data = operate(calculate, buttonName);

		this.setState({
			total: data.total,
			next: data.next,
			operation: data.operation
		})
	}

	render(){
		return (
			<div id="app">
		    <Display result={this.state.total}/>
		    <ButtonPanel clickHandler={handleClick} />
		  </div>
		)
	}
};


export default App;
