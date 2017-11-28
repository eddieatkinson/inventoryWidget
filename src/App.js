import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import products from './products.js';
// import SearchBar from './SearchBar';
import Table from './Table';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			myProducts: products.data
		}
	}

	searchHandler(event){
		event.preventDefault();
		var value = document.getElementById('searchTerm').value;
		console.log(`User entered: ${value}!`);
	}

	filterHandler(){
		
	}

	componentDidMount(){
		console.log("The component mounted.");
		// this.setState({
		// 	myProducts: products.data
		// });
	}

	render() {
		var theProducts = this.state.myProducts.map((product)=>{
			return(product)
		});
		console.log(`The products: ${theProducts}`)
		var uniqueCategories = []
		this.state.myProducts.map((product)=>{
			if(uniqueCategories.indexOf(product.category) === -1){
				uniqueCategories.push(product.category);
				console.log("New one!")
			}
			return null
		});
		var uniqueCategoryLinks = uniqueCategories.map((category, index)=>{
			return(<a onClick={this.filterHandler} key={index}>{category}</a>)
		});
		// console.log(`uniqueCategoryLinks = ${uniqueCategoryLinks}`)
		// console.log(`Unique Categories = ${uniqueCategories}`);
		return(
			<div className="App">
				<div className="searchBar">
					<form onSubmit={this.searchHandler}>
						<input id="searchTerm" type="text" placeholder="Search" />
						<button className="btn btn-primary">Search!</button>
						{uniqueCategoryLinks}
					</form>
				</div>
				<div className="table">
					<Table productsArr={theProducts} />
				</div>
			</div>
		);
	}
}

export default App;
