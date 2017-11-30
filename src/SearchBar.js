import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import products from './products.js';


class SearchBar extends Component{
	constructor(){
		super();
		this.state = {
			searchTerm: ""
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({
			searchTerm: event.target.value
		})
		// var value = document.getElementById('searchTerm').value;
		// console.log(`User entered: ${value}!`);
	}
	render(){
		const searchTerm = this.state.searchTerm;
		// var uniqueCategories = []
		// products.data.map((product)=>{
		// 	if(uniqueCategories.indexOf(product.category) === -1){
		// 		uniqueCategories.push(product.category);
		// 		// console.log("New one!")
		// 	}
		// 	return null
		// });
		// var uniqueCategoryLinks = uniqueCategories.map((category, index)=>{
		// 	return(<a>{category}</a>)
		// });
		// console.log(`uniqueCategoryLinks = ${uniqueCategoryLinks}`)
		// console.log(`Unique Categories = ${uniqueCategories}`);
		return(
			<form className="search-bar">
				<input onChange={this.handleChange} id="searchTerm" type="text" placeholder="Search..." />
				<div>
					<input value={searchTerm} type="checkbox" />Only show products in stock.
				</div>
				<button className="btn btn-primary">Search!</button>
			</form>
		);
	}
}

export default SearchBar;
