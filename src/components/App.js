import React, {Component} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="App">
				<div className="container">
					<h2>Input Your Birthday!</h2>
					<Form inline>
						<FormControl type="date">
						</FormControl>
						{' '}
						<Button>Submit</Button>
					</Form>
				</div>
			</div>
		);
	}
}

export default App;
