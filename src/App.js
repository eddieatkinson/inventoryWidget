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

	// searchHandler(event){
	// 	event.preventDefault();
	// 	var value = document.getElementById('searchTerm').value;
	// 	// console.log(`User entered: ${value}!`);
	// }

	handleFilterChange(newValue){
		this.setState({
			searchTerm: newValue
		});
		// console.log('My child component ran me.');
	}

	handleCheck(newValue){
		// var inStock = false
		// console.log("I been checked!");
		// console.log(`Checkbox value is: ${newValue}`);
		// if(newValue == 'on'){
		// 	inStock = true;
		// }
		this.setState({
			inStock: newValue
		});
	}

	render() {
		const searchTerm = this.state.searchTerm;
		const inStock = this.state.inStock;
		// var theProducts = this.state.myProducts.map((product)=>{
		// 	return(product)
		// });
		// // console.log(`The products: ${theProducts}`)
		// var uniqueCategories = []
		// this.state.myProducts.map((product)=>{
		// 	if(uniqueCategories.indexOf(product.category) === -1){
		// 		uniqueCategories.push(product.category);
		// 		// console.log("New one!")
		// 	}
		// 	return null
		// });
		// var uniqueCategoryLinks = uniqueCategories.map((category, index)=>{
		// 	return(<a onClick={this.filterHandler} key={index}>{category}</a>)
		// });
		// console.log(`uniqueCategoryLinks = ${uniqueCategoryLinks}`)
		// console.log(`Unique Categories = ${uniqueCategories}`);
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
