import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import products from './products.js';t
import SearchBar from './SearchBar';
import Table from './Table';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchTerm: "",
			inStock: ""
		}
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}

	handleFilterChange(newValue){
		this.setState({
			searchTerm: newValue
		});
	}

	handleCheck(newValue){
		this.setState({
			inStock: newValue
		});
	}

	render() {
		const searchTerm = this.state.searchTerm;
		const inStock = this.state.inStock;
		return(
			<div className="App container">
				<SearchBar onChange={this.handleFilterChange} onCheck={this.handleCheck} />
				<div className="table">
					<Table searchTerm={searchTerm} inStock={inStock} />
				</div>
			</div>
		);
	}
}

export default App;
