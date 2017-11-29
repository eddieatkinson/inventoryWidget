import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import products from './products.js';


class SearchBar extends Component{
	searchHandler(event){
		event.preventDefault();
		var value = document.getElementById('searchTerm').value;
		// console.log(`User entered: ${value}!`);
	}
	render(){
		var uniqueCategories = []
		products.data.map((product)=>{
			if(uniqueCategories.indexOf(product.category) === -1){
				uniqueCategories.push(product.category);
				// console.log("New one!")
			}
			return null
		});
		var uniqueCategoryLinks = uniqueCategories.map((category, index)=>{
			return(<a>{category}</a>)
		});
		// console.log(`uniqueCategoryLinks = ${uniqueCategoryLinks}`)
		// console.log(`Unique Categories = ${uniqueCategories}`);
		return(
			<form className="search-bar" onSubmit={this.searchHandler}>
				<input id="searchTerm" type="text" placeholder="Search..." />
				<div>
					<input type="checkbox" />Only show products in stock.
				</div>
				<button className="btn btn-primary">Search!</button>
				{uniqueCategoryLinks}
			</form>
		);
	}
}

export default SearchBar;
